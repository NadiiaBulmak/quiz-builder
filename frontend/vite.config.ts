import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "."),
      "@": path.resolve(__dirname, "src"),
      "@/api": path.resolve(__dirname, "src/api"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/constants": path.resolve(__dirname, "src/constants"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/router": path.resolve(__dirname, "src/router"),
      "@/types": path.resolve(__dirname, "src/types"),
      "@/theme": path.resolve(__dirname, "src/theme"),
    },
  },
});
