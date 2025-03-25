import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,
  },
  base:
    process.env.NODE_ENV === "production" ? "/Admin-Dashboard__3-20-25/" : "/",
});
