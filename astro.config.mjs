import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://harsh-portfolio-ecru-two.vercel.app",
  integrations: [mdx(), sitemap()],
});
