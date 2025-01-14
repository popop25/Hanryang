import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // @를 src 폴더로 매핑
    },
  },
  server: {
    host: "0.0.0.0", // 외부에서 접속 가능하도록 설정
    port: 3000, // 사용할 포트 번호
  },
});
