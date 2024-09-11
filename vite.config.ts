import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
        plugins: [react()],
        base: '/My-Portfolio/', // Correct base path for GitHub Pages deployment
        build: {
            outDir: 'build',
        },
        assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif']
    },
);
