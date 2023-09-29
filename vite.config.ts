import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), webfontDownload()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
