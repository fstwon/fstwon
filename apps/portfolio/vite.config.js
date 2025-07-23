import createBaseConfig from '../../libs/vite-base-config/vite.config';
import { defineConfig, mergeConfig } from 'vite';
import path from 'path';

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
			port: 3000,
		},
		base: '/',
	})
);
