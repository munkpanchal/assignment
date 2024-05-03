import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    proxy: {
        "/api": {
            // The prefix you want to proxy
            target: "https://api.weekday.technology/adhoc/getSampleJdJSON", // The address of your backend server
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""), // Remove the proxy prefix
        },
    },
});
