import { AppShell } from "../components/AppShell";

type Props = {
  password: string;
  setPassword: (v: string) => void;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
};

export function LoginScreen(props: Props) {
  return (
    <AppShell title="Scene Studio" subtitle="分镜脚本远程工作台" error={props.error}>
      <form className="panel login-panel" onSubmit={props.onSubmit}>
        <p className="lede">输入服务口令登录</p>
        <div className="field">
          <label className="field-label" htmlFor="studio-password">
            口令
          </label>
          <input
            id="studio-password"
            type="password"
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
            placeholder="SCENE_STUDIO_PASSWORD"
            autoFocus
          />
        </div>
        <button className="primary btn-block" type="submit">
          登录
        </button>
      </form>
    </AppShell>
  );
}
