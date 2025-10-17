import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PUBLIC_SITE_URL || "http://localhost:4321",
  devToolbar: {
    enabled: false,
  },
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
