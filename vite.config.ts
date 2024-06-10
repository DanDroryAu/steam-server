import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    test: {
        setupFiles: ['./src/test/setup.ts'],
        env: {
            STEAM_API_KEY: 'test-key'
        }
    }
});