import createBaseConfig from '../../libs/vite-base-config/vite.config.mjs';
import { defineConfig, mergeConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default mergeConfig(
	createBaseConfig(),
	defineConfig({
		root: __dirname,
		build: {
			outDir: 'dist',
			emptyOutDir: true,
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		server: {
			port: 3001,
		},
		base: '/',
	})
);
