import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The browser bundle only attaches two copy buttons to prerendered HTML, so it
// runs on Preact's React-compatible runtime (a few kB instead of ~60 kB of
// React DOM). The build-time prerender (vite build --ssr) keeps real React.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  resolve: isSsrBuild
    ? {}
    : {
        alias: {
          "react-dom/client": "preact/compat/client",
          "react-dom": "preact/compat",
          "react/jsx-runtime": "preact/jsx-runtime",
          "react/jsx-dev-runtime": "preact/jsx-dev-runtime",
          react: "preact/compat",
        },
      },
  build: {
    target: "es2020",
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
  },
}));
