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
				'@tailwind': path.resolve(__dirname, '../../packages/styles/tailwind'),
				'@scss': path.resolve(__dirname, '../../packages/styles/scss'),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					includePaths: [path.resolve(__dirname, '../../packages')],
					additionalData: (source, id) => {
						// id 변수에는 현재 처리 중인 파일의 전체 경로가 들어옵니다.
						// 만약 파일 경로에 'index.scss'가 포함되어 있다면,
						// 아무것도 추가하지 않고 원본(source)을 그대로 반환합니다.
						if (id.endsWith('index.scss')) {
							return source;
						}

						// 그 외의 모든 SCSS 파일('.module.scss' 등)에는
						// _forward.scss 내용을 주입합니다.
						return `@use 'styles/scss/abstracts/forward' as *; \n ${source}`;
					},
				},
			},
		},
	});
};

export default createBaseConfig;
