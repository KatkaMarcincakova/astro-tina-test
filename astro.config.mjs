import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://katkamarcincakova.github.io/astro-tina-test/',
  bae: '/src',
  integrations: [tailwind()],
});