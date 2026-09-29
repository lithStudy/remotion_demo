# Scene Studio 部署与使用

Scene Studio 是口播工程的网页工作台：登录后管理工程、生成并编辑分镜，再在同一台机器上跑语音、配图、代码生成，并通过 Remotion Studio 远程看动画。

它由三个进程组成：

| 进程 | 作用 | 默认端口 | 当前机器 |
|---|---|---|---|
| 网页 `scene_studio` | 浏览器界面，把 `/api` 转到接口 | `21118` | `21121` |
| 接口 `python -m narrator_pipeline.web` | 登录、工程、生成任务 | `21119` | `21120` |
| 预览代理（随接口一起启动） | 校验登录后，把整站转到本机 Remotion Studio | `21122` | `21122` |
| Remotion Studio | 编译并播放动画。由任务成功或「打开预览」拉起 | `3000` | `3000` |

网页端口和接口端口来自 `narrator_pipeline/.env`。预览端口和 Studio 端口未在 `.env` 里写出时用上表的默认值。

## 部署

在仓库根目录执行。仓库里需要已经装好 Remotion 依赖（`node_modules`），`scene_studio` 里也要装过依赖。

```bash
npm install
cd scene_studio && npm install
```

### 环境变量

写在 `narrator_pipeline/.env`。改完后必须重启接口进程，已经运行的进程不会重读这个文件。

| 变量 | 作用 |
|---|---|
| `SCENE_STUDIO_PASSWORD` | 登录口令。不设置时接口无法登录 |
| `SCENE_STUDIO_HOST` | 接口监听地址，默认 `0.0.0.0` |
| `SCENE_STUDIO_PORT` | 接口端口 |
| `SCENE_STUDIO_UI_PORT` | 网页端口。Vite 用它，并把 `/api` 代理到接口端口 |
| `SCENE_STUDIO_PREVIEW_PORT` | 对外预览端口，默认 `21122` |
| `SCENE_STUDIO_REMOTION_PORT` | 本机 Remotion Studio 端口，默认 `3000` |

示例见 `narrator_pipeline/.env.example`：

```
SCENE_STUDIO_PASSWORD=111111
# SCENE_STUDIO_HOST=0.0.0.0
# SCENE_STUDIO_PORT=21119
# SCENE_STUDIO_UI_PORT=21118
# SCENE_STUDIO_PREVIEW_PORT=21122
# SCENE_STUDIO_REMOTION_PORT=3000
```

网页上的工程、Step 0 到 Step 4、生成出来的场景代码，以及 Remotion Studio 的编译，都在脚本所在的仓库根目录。口播稿在 `narrations/`，分镜在 `src/remotions/{名称}/`，配图和音频在 `public/`。

预览端口不能和网页端口、接口端口相同，否则接口启动时报错退出。

Step 2 需要 `SPEECH_KEY`。Step 3 按 `config.yaml` 里的 `image_provider` 使用对应的配图密钥。缺密钥时该步失败，任务日志里会留下原因。

### 启动

开两个终端，都在仓库根目录。

```bash
python -m narrator_pipeline.web
```

```bash
cd scene_studio && npm run dev
```

接口启动时会打印预览代理地址，例如 `0.0.0.0:21122 -> 127.0.0.1:3000`。

### 对外端口

浏览器要能打开两个端口，且主机名相同（登录 Cookie 按主机名发送，不区分端口）：

- 网页端口（当前是 `21121`）
- 预览端口（`21122`）

不要把 `3000` 映射到公网。Remotion Studio 自己会绑在所有网卡的 `3000` 上，命令行不能改成只听本机。公网只放预览代理；代理先检查登录 Cookie，再转到 `127.0.0.1:3000`。

用域名访问时，把域名加进 `scene_studio/vite.config.ts` 的 `allowedHosts`。当前已包含 `mufengmucao.top`。

接口重启后，内存里的登录会失效，需要重新登录。

## 使用

浏览器打开网页端口，输入 `SCENE_STUDIO_PASSWORD`。

1. 新建或导入工程。口播稿在 `narrations/{名称}.txt`，分镜在 `src/remotions/{名称}/scenes/`。
2. 生成分镜会跑 Step 0（场景拆分）和 Step 1（文案分析）。可以在 Step 0 后暂停，审阅草稿再继续 Step 1。
3. 在脚本页改模板和口播。同一时间只能有一个生成任务；有任务在跑时，其他生成都不能开始。
4. 工程页的「成片步骤」默认是 Step 4，并且勾着「只跑这一步」。取消勾选后，会从选中的步骤跑到 Step 4。
   - Step 2：语音合成，写入 `public/audio/{名称}/`
   - Step 3：配图生成，写入 `public/images/{名称}/`
   - Step 4：按脚本生成场景代码，并登记到 Remotion 入口
5. 任务成功后，如果 Remotion Studio 还没在跑，会拉起它。已经在跑则不重启。任务失败不新开，也不关掉正在跑的 Studio。
6. 「打开预览」不必等任务成功。Studio 未运行时会先启动，按钮显示「正在启动预览…」，就绪后才打开新标签。第一次编译会等一会儿。

预览下拉框决定打开哪一条成片，id 与 `src/Root.tsx` 里的注册一致：

| 选项 | 成片 id |
|---|---|
| 横屏 | `{工程名}横屏` |
| 竖屏 | `{工程名}竖屏` |
| 封面横屏 | `{工程名}封面横屏` |
| 封面竖屏 | `{工程名}封面竖屏` |

例如工程「智驾兜底论」选横屏，地址是 `http://主机:21122/智驾兜底论横屏`。若浏览器拦截了延迟打开的新标签，页面上会出现「预览已就绪，打开」。

退出登录会清掉预览用的 Cookie。未登录时打开预览端口会得到「未登录」。
