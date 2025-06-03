import { defineConfig } from 'vite';
import {viteObfuscateFile} from 'vite-plugin-obfuscator';
import htmlMinifier from 'vite-plugin-html-minifier';
import cssnano from 'cssnano'


export default defineConfig({
    plugins: [
        viteObfuscateFile(),
        htmlMinifier({
            minify: true,
          }),
        cssnano({
            preset: 'default',
        }),
    ],
    build: {
        minify: 'terser',
        terserOptions: {
            compress: true,
            mangle: true
        }
    }
});
