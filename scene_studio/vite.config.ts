import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 21118,
    strictPort: true,
    allowedHosts: ["mufengmucao.top"],
    proxy: {
      "/api": {
        target: "http://127.0.0.1:21119",
        changeOrigin: true,
      },
    },
  },
});
