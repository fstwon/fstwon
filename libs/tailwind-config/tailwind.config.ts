import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'../../apps/**/*.{html,ts,tsx,js,jsx}',
		'../../packages/**/*.{html,ts,tsx,js,jsx}',
		'../../libs/**/*.{html,ts,tsx,js,jsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [],
};

export default config;
