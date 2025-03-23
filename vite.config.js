import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use "/" for local dev and "/Admin-Dashboard__3-20-25/" for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/Admin-Dashboard__3-20-25/" : "/",
});
