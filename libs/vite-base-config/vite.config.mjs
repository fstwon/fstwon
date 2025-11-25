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
			{
				name: 'font-preload',
				transformIndexHtml: (html) => {
					// NOTE: 자체 플러그인 구현 시도 예정
					// Font preload 최적화 적용
					const preloadFonts = [
						`<link
                rel="preconnect"
                href="https://cdn.jsdelivr.net"
                crossorigin
              />`,
						`<link
                rel="preload"
                href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2"
                as="font"
                type="font/woff2"
                crossorigin
            />`,
						`<link
                rel="preload"
                href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
                as="style"
                type="text/css"
                crossorigin
            />`,
						`<link
                rel="preload"
                href="https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2"
                as="font"
                type="font/woff2"
                crossorigin="anonymous"
            />`,
						`<link
                rel="preload"
                as="style"
                href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
                crossorigin="anonymous"
            />`,
						`<link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
              crossorigin="anonymous"
            />`,
					].join('\n');
					return html.replace('</head>', `${preloadFonts}\n</head>`);
				},
			},
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
