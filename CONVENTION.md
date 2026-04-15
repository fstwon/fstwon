# 개발 컨벤션

## 목차

- [커밋 메시지 컨벤션](#커밋-메시지-컨벤션)
- [PR 컨벤션](#pr-컨벤션)
- [브랜치 전략](#브랜치-전략)

---

## 커밋 메시지 컨벤션

### 형식

```
<type>: <subject>
```

- **type**: 소문자로 작성
- **subject**: 변경 내용을 명확하게 한 줄로 작성 (한국어 사용 가능)
- 제목 끝에 마침표(`.`) 사용 금지

### 커밋 타입

| type | 설명 |
|------|------|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `style` | UI/스타일 변경 (CSS, SCSS 등) |
| `refactor` | 기능 변경 없는 코드 리팩토링 |
| `chore` | 빌드 설정, 패키지 관리, 기타 잡무 |
| `docs` | 문서 추가 및 수정 |
| `test` | 테스트 코드 추가 및 수정 |
| `deps` | 의존성 업데이트 |
| `init` | 프로젝트 초기 설정 |

### 예시

```
feat: 반응형 레이아웃 상태 관리 context 구현
fix: 로고 애니메이션 렌더 시 깜빡임 현상 수정
style: portfolio root base 스타일 시트 분할
chore: Montserrat 폰트 추가
docs: 코딩 컨벤션 문서 작성
deps: React 19.2 버전 업
```

---

## PR 컨벤션

### 제목

```
[<type>] <subject>
```

- 커밋 타입과 동일한 타입 사용
- 변경 내용을 간결하게 요약

**예시**
```
[feat] 반응형 레이아웃 감지 유틸 구현
[fix] intro section 로고 애니메이션 깜빡임 수정
[chore] pretendard 폰트 CDN preload 최적화
```

### 본문

```markdown
## 개요
<!-- 변경 사항에 대한 간략한 설명 -->

## 변경 내용
- 변경 항목 1
- 변경 항목 2

## 관련 이슈
<!-- 관련 이슈 번호 (없으면 삭제) -->
closes #<이슈 번호>

## 스크린샷
<!-- UI 변경이 있을 경우 첨부 (없으면 삭제) -->
```

---

## 브랜치 전략

### 브랜치 구조

```
main
└── <type>/<description>
```

| 브랜치 | 설명 |
|--------|------|
| `main` | 배포 브랜치. 직접 커밋 금지 |
| `feat/<description>` | 기능 개발 브랜치 |
| `fix/<description>` | 버그 수정 브랜치 |
| `hotfix/<description>` | 긴급 버그 수정 브랜치 |
| `chore/<description>` | 환경 설정, 리소스 작업 브랜치 |
| `refactor/<description>` | 리팩토링 브랜치 |
| `docs/<description>` | 문서 작업 브랜치 |

### 브랜치 네이밍 규칙

- 소문자와 하이픈(`-`)만 사용
- 설명은 간결하게 작성

**예시**

```
feat/works-section-ui
fix/logo-animation-flicker
chore/montserrat-font
hotfix/netlify-404-redirect
```

### 작업 흐름

1. `main`에서 작업 브랜치 생성
2. 브랜치에서 작업 및 커밋
3. PR 생성 후 코드 리뷰
4. 리뷰 승인 후 `main`에 merge
5. 작업 브랜치 삭제
