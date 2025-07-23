import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

/**
 * Vite 공통 설정 (React + TypeScript + SCSS + PostCSS)
 * 각 앱에서 이 설정을 확장해 사용
 */

const createBaseConfig = () => {
	return defineConfig({
		plugins: [react()],
		resolve: {
			alias: {
				'@styles': path.resolve(__dirname, '../../packages/styles/tailwind'),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '', // 필요시 SCSS 변수 자동 import 가능
				},
			},
			postcss: path.resolve(__dirname, '../postcss-config/postcss.config.js'),
		},
	});
};

export default createBaseConfig;
