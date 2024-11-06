# FE9 중급/고급 프로젝트 템플릿

## 소개

**FE9 중급/고급 프로젝트 템플릿**은 Next.js, React, TypeScript, TailwindCSS 등 최신 기술 스택을 기반으로 한 프론트엔드 프로젝트 템플릿입니다.
이 템플릿은 소셜 로그인 기능과 이미지 업로드 기능 등을 포함하여 중급 수준의 웹 애플리케이션 개발에 적합하도록 구성되어 있습니다.

## 주요 라이브러리

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.14-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

### 상태 관리 & 데이터 페칭

[![React Query](https://img.shields.io/badge/React%20Query-5.59.19-FF4154?logo=react-query)](https://tanstack.com/query)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.1-brown)](https://github.com/pmndrs/zustand)
[![Axios](https://img.shields.io/badge/Axios-1.7.7-5A29E4?logo=axios)](https://axios-http.com/)

### 폼 & 유효성 검사

[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-7.53.0-EC5990)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-3.23.8-3068B7)](https://zod.dev/)
[![HookForm Resolvers](https://img.shields.io/badge/@hookform/resolvers-3.9.0-EC5990)](https://github.com/react-hook-form/resolvers)

### UI 컴포넌트

[![Hello Pangea DnD](https://img.shields.io/badge/@hello--pangea/dnd-17.0.0-yellow)](https://github.com/hello-pangea/dnd)
[![React DatePicker](https://img.shields.io/badge/React%20DatePicker-7.4.0-216BA5)](https://reactdatepicker.com/)
[![React Modal](https://img.shields.io/badge/React%20Modal-3.16.1-black)](https://github.com/reactjs/react-modal)
[![React Icons](https://img.shields.io/badge/React%20Icons-5.3.0-E91E63)](https://react-icons.github.io/)
[![React Spinners](https://img.shields.io/badge/React%20Spinners-0.14.1-36D7B7)](https://www.davidhu.io/react-spinners/)
[![React Hot Toast](https://img.shields.io/badge/React%20Hot%20Toast-2.4.1-FF4444)](https://react-hot-toast.com/)

### 유틸리티

[![date-fns](https://img.shields.io/badge/date--fns-4.1.0-yellow)](https://date-fns.org/)
[![Tailwind Merge](https://img.shields.io/badge/tailwind--merge-2.5.4-38B2AC)](https://github.com/dcastil/tailwind-merge)
[![Form Data](https://img.shields.io/badge/form--data-4.0.1-green)](https://github.com/form-data/form-data)

### 개발 도구

[![ESLint](https://img.shields.io/badge/ESLint-8.57.1-4B32C3?logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.3.3-F7B93E?logo=prettier)](https://prettier.io/)
[![Husky](https://img.shields.io/badge/Husky-8.0.0-yellow?logo=git)](https://typicode.github.io/husky/)
[![Commitlint](https://img.shields.io/badge/Commitlint-19.5.0-black?logo=commitlint)](https://commitlint.js.org/)

## 스크립트 설명

| 스크립트  | 설명                                        |
| --------- | ------------------------------------------- |
| `dev`     | 개발 서버를 실행합니다.                     |
| `build`   | 프로덕션 빌드를 생성합니다.                 |
| `start`   | 프로덕션 빌드를 기반으로 서버를 실행합니다. |
| `lint`    | ESLint를 사용하여 코드 스타일을 검사합니다. |
| `format`  | Prettier를 사용하여 코드 형식을 정리합니다. |
| `clean`   | `.next`와 `out` 디렉터리를 삭제합니다.      |
| `prepare` | Husky를 설치합니다.                         |
| `test`    | 테스트를 실행합니다 (현재는 설정되지 않음). |

## 개발 환경 설정

### Husky

Git 훅을 사용하여 커밋 전 테스트를 실행합니다. 다음과 같이 설정되어 있습니다:

```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

이 설정은 커밋 메시지가 작성될 때 commitlint를 실행하여 커밋 메시지 형식을 검사합니다.

### ESLint

ESLint는 JavaScript 및 TypeScript 코드의 품질을 향상시키고 일관된 코딩 스타일을 유지하는 데 도움을 줍니다.
이 프로젝트에서는 다음과 같이 ESLint를 구성했습니다:

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
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "lf"
      }
    ],
    "linebreak-style": ["error", "unix"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  }
}
```

이 설정은 Next.js, TypeScript, Prettier와 관련된 규칙을 적용하며, 사용하지 않는 변수에 대해 경고를 표시합니다.
또한 일관된 줄 바꿈 스타일을 강제하고 Prettier와의 통합을 설정합니다.

### Prettier

코드 스타일의 일관성을 유지하기 위해 Prettier를 사용합니다. `.prettierrc` 파일에 다음과 같이 구성되어 있습니다:

```json
{
  "printWidth": 120, // 한 줄의 최대 길이를 120자로 제한
  "tabWidth": 2, // 탭의 너비를 2 스페이스로 설정
  "useTabs": false, // 탭 대신 스페이스 사용
  "semi": true, // 문장 끝에 세미콜론 사용
  "singleQuote": false, // 작은따옴표 대신 큰따옴표 사용
  "quoteProps": "as-needed", // 필요한 경우에만 객체 속성에 따옴표 사용
  "trailingComma": "es5", // ES5에서 허용되는 후행 쉼표 사용
  "bracketSpacing": true, // 객체 리터럴의 중괄호 주위에 공백 추가
  "arrowParens": "always", // 화살표 함수의 매개변수에 항상 괄호 사용
  "proseWrap": "preserve", // 마크다운 등의 프로즌 래핑 보존
  "endOfLine": "lf", // 줄 끝에 LF(Line Feed) 사용
  "plugins": ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  "importOrder": [
    // import 문 정렬 순서 지정
    "^@/lib/(.*)$",
    "^@/app/(.*)$",
    "^@/components/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true, // import 그룹 사이에 빈 줄 추가
  "importOrderSortSpecifiers": true, // import 지정자 정렬
  "overrides": [
    {
      "files": "*",
      "options": {
        "endOfLine": "lf"
      }
    }
  ]
}
```

이 설정은 코드 포맷팅의 세부 사항을 정의하고, import 문의 정렬 순서를 지정합니다.

### TypeScript

타입 안정성을 높이기 위해 TypeScript를 사용합니다. `tsconfig.json` 파일에 다음과 같이 구성되어 있습니다:

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    },
    "types": ["./src/types/auth", "@hookform/resolvers"]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "custom.d.ts"],
  "exclude": ["node_modules"]
}
```

### TailwindCSS

CSS 프레임워크로 스타일링을 돕습니다. `tailwind.config.ts` 파일에 다음과 같이 구성되어 있습니다:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Helvetica Neue",
          "Apple SD Gothic Neo",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
```

## Next.js 설정

`next.config.mjs` 파일에서 Next.js의 설정을 관리합니다:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
```

이 설정은 SVG 파일을 React 컴포넌트로 가져올 수 있게 해줍니다.

## SVG 타입 정의

`custom.d.ts` 파일에서 SVG 파일에 대한 타입 정의를 제공합니다:

```typescript
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
```

이를 통해 TypeScript 환경에서 SVG 파일을 React 컴포넌트로 사용할 수 있습니다.

## 소셜 로그인 설정

Google 및 Kakao 소셜 로그인 설정을 위해서는 `next-auth` 라이브러리를 사용합니다.
인증을 위해 `.env` 파일에 다음과 같은 환경 변수를 설정해야 합니다:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
KAKAO_CLIENT_ID=your-kakao-client-id
KAKAO_CLIENT_SECRET=your-kakao-client-secret
```

이 템플릿을 사용하면 최신 웹 개발 기술을 활용한 프로젝트를 빠르게 시작할 수 있습니다.
각 기술과 도구의 설정이 미리 되어 있어, 개발에 즉시 착수할 수 있습니다.
