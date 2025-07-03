import createBaseConfig from '../../libs/vite-base-config/vite.config';
import { defineConfig, mergeConfig } from 'vite';

export default mergeConfig(
	createBaseConfig(),
	defineConfig({
		root: __dirname,
		server: {
			port: 3000,
		},
	})
);
