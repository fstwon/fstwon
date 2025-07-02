/** @type {import("prettier").Config} */

export default config = {
  semi: true,            // 문장 끝에 세미콜론 사용
  singleQuote: true,     // 문자열에 작은따옴표 사용
  trailingComma: 'es5',  // ES5에 맞춰 배열/객체 끝에 쉼표 추가
  printWidth: 100,       // 줄 바꿈 기준 길이 (가독성 확보)
  tabWidth: 2,           // 들여쓰기 너비
  arrowParens: 'avoid'   // 단일 매개변수 화살표 함수는 괄호 생략
};