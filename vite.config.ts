import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import { compression } from 'vite-plugin-compression2';
import manifestSRI from 'vite-plugin-manifest-sri';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
          resolvers: [
            PrimeVueResolver(),
          ]
        }),
        ViteMinifyPlugin(),
        compression(),
        manifestSRI(),
    ],
});
