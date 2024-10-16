# FE9 중급 프로젝트 템플릿

## 소개

**FE9 중급 프로젝트 템플릿**은 Next.js, React, TypeScript, TailwindCSS 등 최신 기술 스택을 기반으로 한 프론트엔드 프로젝트 템플릿입니다. 이 템플릿은 소셜 로그인 기능과 이미지 업로드 기능 등을 포함하여 중급 수준의 웹 애플리케이션 개발에 적합하도록 구성되어 있습니다.

## 주요 기능 및 기술 스택

- **Next.js 14.2.15**: 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 지원하는 React 프레임워크입니다.
- **React 18**: 최신 버전의 React 라이브러리입니다.
- **TypeScript 5**: 정적 타입 언어로, 코드 품질과 생산성을 높여줍니다.
- **Tailwind CSS 3.4.14**: 유틸리티 기반의 CSS 프레임워크로, 빠르고 효율적인 스타일링을 제공합니다.
- **NextAuth.js 4.24.8**: Google과 Kakao 소셜 로그인 기능을 위한 인증 라이브러리입니다.
- **Axios 1.7.7**: HTTP 요청을 간편하게 처리할 수 있는 라이브러리입니다.
- **Jotai 2.10.1**: 간결하고 사용하기 쉬운 전역 상태 관리 라이브러리입니다.
- **Formidable 3.5.1**: 서버 측 파일 업로드 처리를 위한 라이브러리입니다.

## 스크립트 설명

- **`dev`**: 개발 서버를 실행합니다.
- **`build`**: 프로덕션 빌드를 생성합니다.
- **`start`**: 프로덕션 빌드를 기반으로 서버를 실행합니다.
- **`lint`**: ESLint를 사용하여 코드 스타일을 검사합니다.
- **`format`**: Prettier를 사용하여 코드 형식을 정리합니다.
- **`clean`**: `.next`와 `out` 디렉터리를 삭제합니다.
- **`prepare`**: Husky를 설치합니다.
- **`lint-staged`**: Lint-staged를 실행합니다.
- **`test`**: 테스트를 실행합니다 (현재는 설정되지 않음).

## 주요 의존성

- **`axios`**: HTTP 요청 처리를 위한 클라이언트입니다.
- **`cookie`, `js-cookie`**: 쿠키를 다루기 위한 라이브러리입니다.
- **`cors`**: 서버 간의 리소스 공유를 관리합니다.
- **`date-fns`**: 날짜 처리를 쉽게 도와주는 라이브러리입니다.
- **`formidable`**: 파일 업로드 처리를 위한 서버 측 라이브러리입니다.
- **`react-hook-form`**: 폼 관리를 위한 React 라이브러리입니다.
- **`react-hot-toast`**: 알림 메시지를 표시하기 위한 라이브러리입니다.
- **`react-spinners`**: 로딩 스피너 컴포넌트를 제공하는 라이브러리입니다.
- **`tailwind-merge`**: Tailwind CSS 클래스를 효율적으로 병합하는 유틸리티입니다.
- **`zod`**: 스키마 선언 및 유효성 검사 라이브러리입니다.

## 개발 환경 설정

- **ESLint**: 프로젝트의 코드 품질을 보장하기 위해 ESLint를 설정했습니다. `.eslintrc.json` 파일에 다음과 같이 구성되어 있습니다:

  ```json
  {
    "extends": [
      "next",
      "next/core-web-vitals",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    "plugins": ["@typescript-eslint", "prettier"],
    "parser": "@typescript-eslint/parser",
    "rules": {
      "prettier/prettier": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn"
    }
  }
  ```

- **Prettier**: 코드 스타일의 일관성을 유지하기 위해 Prettier를 사용합니다. `.prettierrc` 파일에 다음과 같이 구성되어 있습니다:

  ```json
  {
    "printWidth": 80,
    "tabWidth": 2,
    "useTabs": false,
    "semi": false,
    "singleQuote": true,
    "quoteProps": "as-needed",
    "jsxSingleQuote": false,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "bracketSameLine": false,
    "arrowParens": "avoid",
    "plugins": [
      "@trivago/prettier-plugin-sort-imports",
      "prettier-plugin-tailwindcss"
    ],
    "proseWrap": "preserve",
    "endOfLine": "lf",
    "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true
  }
  ```

- **TypeScript**: 타입 안정성을 높이기 위해 TypeScript를 사용합니다.
- **TailwindCSS**: CSS 프레임워크로 스타일링을 돕습니다.
- **Husky**: Git 훅을 사용하여 커밋 전 린트 및 테스트를 실행합니다.
- **Lint-staged**: 스테이징된 파일에 대해서만 린트를 실행합니다.
- **Commitlint**: 커밋 메시지의 형식을 검사합니다.

## VS Code 설정

프로젝트에는 VS Code 사용자를 위한 추천 설정이 포함되어 있습니다. `.vscode/settings.json` 파일에 다음과 같이 구성되어 있습니다:

```json
{
  "cSpell.words": [
    "tailwindcss",
    "Kakao",
    "arrowParens",
    "trivago",
    "Pretendard",
    "Lexend",
    "Roboto",
    "Neue",
    "commitlint"
  ],
  "editor.formatOnSave": true
}
```

이 설정은 Prettier를 기본 포매터로 사용하고, 저장 시 자동 포맷팅을 활성화합니다.

## 소셜 로그인 설정

Google 및 Kakao 소셜 로그인 설정을 위해서는 `next-auth` 라이브러리를 사용합니다. 인증을 위해 `.env` 파일에 다음과 같은 환경 변수를 설정해야 합니다:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
KAKAO_CLIENT_ID=your-kakao-client-id
KAKAO_CLIENT_SECRET=your-kakao-client-secret
```

## 시작하기

1. 저장소를 클론합니다.
2. 의존성을 설치합니다: `npm install`
3. 개발 서버를 실행합니다: `npm run dev`
4. 브라우저에서 `http://localhost:3000`을 열어 결과를 확인합니다.

## 기여하기

프로젝트에 기여하고 싶으시다면, 풀 리퀘스트를 보내주세요. 모든 기여는 환영합니다!

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.
