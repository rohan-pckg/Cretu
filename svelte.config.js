import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";
import Icons from 'unplugin-icons/vite'

export default {
  preprocess: [
    vitePreprocess(), // Keep Vite's default preprocessing
    preprocess({
      scss: {
        // Optional: Add SCSS-specific options here if needed
      },
    }),
  ],
};
