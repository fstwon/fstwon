// libs/eslint/config.js

/** @type {import('eslint').Linter.Config} */

export default config = {
	root: true, // 루트 프로젝트로 설정. 상위 설정을 무시

	env: {
		browser: true, // 브라우저 전역 객체 (window 등) 허용
		es2021: true, // 최신 ECMAScript 문법을 사용 가능하게 설정
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2022, // 최신 문법 해석 (예: optional chaining)
		sourceType: 'module', // ESM 사용 (import/export)
	},

	plugins: ['react'], // 리액트 관련 규칙 추가

	extends: [
		'eslint:recommended', // ESLint의 기본 추천 규칙 사용
		'plugin:react/recommended', // 리액트 JSX 추천 규칙 사용
		'plugin:@typescript-eslint/recommended',
		'prettier', // Prettier와 충돌 방지 (포맷팅 관련 규칙 off)
	],

	rules: {
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'warn',
		'no-console': 'warn',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},

	settings: {
		react: {
			version: 'detect', // 설치된 리액트 버전을 자동 감지
		},
	},
};
