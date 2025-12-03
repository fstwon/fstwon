/** @type {import("prettier").Config} */

const config = {
	// 문장 끝에 세미콜론 사용
	semi: true,

	// 문자열에 작은따옴표 사용
	singleQuote: true,

	// ES5에 맞춰 배열/객체 끝에 쉼표 추가
	trailingComma: 'es5',

	// 줄 바꿈 기준 길이 (가독성 확보)
	printWidth: 100,

	// 들여쓰기 너비
	tabWidth: 2,

	// 탭 문자 사용 (스페이스 대신)
	useTabs: true,

	// 단일 매개변수 화살표 함수는 괄호 생략
	arrowParens: 'avoid',
};

export default config;


