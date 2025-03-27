import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "pryoduction" ? "/Admin-Dashboard__3-20-25/" : "/",
});
