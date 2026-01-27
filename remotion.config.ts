// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideWebpackConfig(enableTailwind);

// Remotion 会自动下载并使用 Chrome Headless Shell
// 这是推荐的方式，因为新版本的 Chrome 已经移除了旧的 Headless 模式
// 如果遇到网络问题无法下载，可以：
// 1. 手动运行: npx remotion browser ensure
// 2. 配置代理或使用 VPN
// 3. 或者设置环境变量 CHROME_PATH 指向已下载的 Chrome Headless Shell
