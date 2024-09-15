import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default port for Vite, but you can change it if needed
    open: true, // This will automatically open the browser when the server starts
    historyApiFallback: true, // This ensures that all routes fall back to index.html
  },
});
