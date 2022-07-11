import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");
const resolve = (dir: string) => path.resolve(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
});
