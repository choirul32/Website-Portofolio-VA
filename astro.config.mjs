import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://website-portofolio-va-ruby.vercel.app",
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
