import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon-192x192.png", "icon-512x512.png", "apple-touch-icon.png"],
      manifest: {
        name: "Lernen mit Granit",
        short_name: "Granit",
        description: "Learn German from A1 to C2 with gamified lessons and spaced repetition.",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        icons: [
          {
            src: "icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2}"]
      }
    })
  ],
});
