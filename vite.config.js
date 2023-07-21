import { defineConfig } from 'vite';
import path from 'path'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    server: {
        open: 'index.html',
        port: 8888
    },
    plugins: [
        handlebars({
            partialDirectory: path.resolve(__dirname, 'partials'),
        }),
    ],
});
