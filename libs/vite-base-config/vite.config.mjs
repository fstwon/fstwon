import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createBaseConfig = () => {
	return defineConfig({
		plugins: [
			react(),
			tailwindcss({
				config: path.resolve(
					__dirname,
					'../tailwind-config/tailwind.config.ts'
				),
			}),
		],
		resolve: {
			alias: {
				'@scss': path.resolve(__dirname, '../../packages/styles/scss'),
				'@tailwind': path.resolve(__dirname, '../../packages/styles/tailwind'),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					includePaths: [path.resolve(__dirname, '../../packages/styles/scss')],
					additionalData: `@use '@scss/abstracts/forward' as *; \n`,
				},
			},
		},
	});
};

export default createBaseConfig;
