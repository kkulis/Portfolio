import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/Portfolio/', // required for GitHub Pages, use '/' for custom domains
    server: { port: 3000 }
});
