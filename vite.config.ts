import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/styles/_variables.scss";
        @import "@/assets/styles/_global.scss";
        `,
      },
      less: {
        modifyVars: {
          "primary-color": "#318982",
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  server: {
    port: 9060,
  },
});
