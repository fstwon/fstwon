import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
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
			svgr(),
		],
		resolve: {
			alias: {
				// 워크스페이스 패키지 경로 별칭 (모든 앱에서 공통 사용)
				'@fstwon/styles': path.resolve(__dirname, '../../packages/styles'),
				'@fstwon/styles/scss': path.resolve(
					__dirname,
					'../../packages/styles/scss'
				),
				'@fstwon/styles/tailwind': path.resolve(
					__dirname,
					'../../packages/styles/tailwind'
				),
				'@fstwon/utils': path.resolve(__dirname, '../../packages/utils'),
				'@fstwon/assets': path.resolve(__dirname, '../../packages/assets'),
				'@logos': path.resolve(
					__dirname,
					'../../apps/portfolio/src/assets/icons/logos'
				),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					// SCSS include 경로 설정
					includePaths: [path.resolve(__dirname, '../../packages/styles/scss')],
					// 모든 SCSS에 공용 forward 파일 자동 주입
					additionalData: `@use '@fstwon/styles/scss/abstracts/forward' as *; \n`,
				},
			},
		},
	});
};

export default createBaseConfig;
