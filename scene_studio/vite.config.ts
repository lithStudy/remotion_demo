import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pipelineEnvDir = path.resolve(__dirname, "../narrator_pipeline");

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, pipelineEnvDir, "");
  const uiPort = Number(env.SCENE_STUDIO_UI_PORT || "21118");
  const apiPort = env.SCENE_STUDIO_PORT || "21119";

  return {
    plugins: [react()],
    server: {
      host: true,
      port: uiPort,
      strictPort: true,
      allowedHosts: ["mufengmucao.top"],
      proxy: {
        "/api": {
          target: `http://127.0.0.1:${apiPort}`,
          changeOrigin: true,
        },
      },
    },
  };
});
