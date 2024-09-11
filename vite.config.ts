import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/My-Portfolio/', // Update this based on your repo name or use '/' if needed
    build: {
        outDir: 'dist', // Make this 'dist' to match GitHub Actions configuration
    },
    assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif']
});

