const path = require('path');

/**
 * Webpack 공통 베이스 설정을 함수로 생성
 * @param {Object} env - 환경 변수 객체 (예: { mode: 'development' | 'production' })
 * @returns {import('webpack').Configuration} webpack 설정 객체
 */

function createBaseConfig(env = {}) {
	const isProd = env.mode === 'production';

	return {
		mode: isProd ? 'production' : 'development',
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
			alias: {
				'@ui': path.resolve(__dirname, '../../packages/ui/src'),
			},
		},
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						'css-loader',
						'postcss-loader', // PostCSS 처리
						'sass-loader', // SCSS 처리
					],
				},
			],
		},
		devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
		// 기타 공통 플러그인, 설정 추가 가능
	};
}

module.exports = { createBaseConfig };
