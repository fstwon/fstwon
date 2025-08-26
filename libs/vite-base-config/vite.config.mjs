// 공통 Vite 베이스 설정: 모든 앱에서 공유되는 플러그인/경로/스타일 옵션을 정의합니다
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// __dirname 계산 (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createBaseConfig = () => {
	return defineConfig({
		plugins: [
			// React Fast Refresh, JSX/TSX 지원 등
			react(),
			// Tailwind v4용 Vite 플러그인 (앱에서 @import 'tailwindcss' 사용)
			tailwindcss({
				config: path.resolve(
					__dirname,
					'../tailwind-config/tailwind.config.ts'
				),
			}),
		],
		resolve: {
			alias: {
				// 공용 스타일 패키지 경로 별칭
				'@scss': path.resolve(__dirname, '../../packages/styles/scss'),
				'@tailwind': path.resolve(__dirname, '../../packages/styles/tailwind'),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					// SCSS include 경로 설정
					includePaths: [path.resolve(__dirname, '../../packages/styles/scss')],
					// 모든 SCSS에 공용 forward 파일 자동 주입
					additionalData: `@use '@scss/abstracts/forward' as *; \n`,
				},
			},
		},
	});
};

export default createBaseConfig;
