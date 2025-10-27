import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";
import icon from "astro-icon";

import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PUBLIC_SITE_URL || "https://example.com",                                                          
  devToolbar: {
    enabled: false,       
  },
  integrations: [
    astroExpressiveCode({
      themes: ["andromeeda"],
    }),
    mdx(),
    sitemap(),
    icon(),
    pagefind({
      site: import.meta.env.PUBLIC_SITE_URL || "https://example.com",
      indexing: {
        glob: "**/blog/**",
        excludeSelectors: ["nav", "footer", "header", ".sidebar", ".navigation"]
      }
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    clientPrerender: true,
  },
  build: {
    format: "file",
    inlineStylesheets: "auto",
  },
});
