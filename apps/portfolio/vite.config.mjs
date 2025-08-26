import createBaseConfig from '../../libs/vite-base-config/vite.config.mjs';
import { defineConfig, mergeConfig } from 'vite';
import path from 'path';

export default mergeConfig(
	createBaseConfig(),
	defineConfig({
		// 프로젝트 루트 디렉터리 명시
		root: __dirname,
		build: {
			// 빌드 출력 디렉터리 설정
			outDir: 'dist',
			// 빌드 시 기존 출력물 비우기
			emptyOutDir: true,
		},
		resolve: {
			alias: {
				// 소스 경로 별칭
				'@': path.resolve(__dirname, './src'),
				// 공용 스타일 패키지 별칭 적용
				'@scss': path.resolve(__dirname, '../../packages/styles/scss'),
				'@tailwind': path.resolve(__dirname, '../../packages/styles/tailwind'),
			},
		},
		server: {
			port: 3000,
		},
		base: '/',
	})
);
