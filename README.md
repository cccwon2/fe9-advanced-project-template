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
- **Jotai 2.10.1**: 간결하고 사용하기 쉬운 전역 상태 관리 라이브러리로, 인증 상태 관리에 사용됩니다.
- **Formidable 3.5.1**: 서버 측 파일 업로드 처리를 위한 라이브러리입니다.

## 스크립트 설명

- **`dev`**: 개발 서버를 실행합니다.
- **`build`**: 프로덕션 빌드를 생성합니다.
- **`start`**: 프로덕션 빌드를 기반으로 서버를 실행합니다.
- **`lint`**: ESLint를 사용하여 코드 스타일을 검사합니다.
- **`format`**: Prettier를 사용하여 코드 형식을 정리합니다.
- **`clean`**: `.next`와 `out` 디렉터리를 삭제합니다.
- **`prepare`**: Husky를 설치합니다.
- **`test`**: 테스트를 실행합니다 (현재는 설정되지 않음).

## 주요 의존성

- **`@hookform/resolvers`**: 폼 유효성 검사를 위한 라이브러리입니다.
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

- **ESLint**: 프로젝트의 코드 품질을 보장하기 위해 ESLint를 설정했습니다.

- **Prettier**: 코드 스타일의 일관성을 유지하기 위해 Prettier를 사용합니다. `.prettierrc` 파일에 다음과 같이 구성되어 있습니다:

  ```json
  {
    "printWidth": 120,
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": false,
    "quoteProps": "as-needed",
    "trailingComma": "es5",
    "bracketSpacing": true,
    "arrowParens": "always",
    "proseWrap": "preserve",
    "endOfLine": "lf",
    "plugins": ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
    "importOrder": ["^@/lib/(.*)$", "^@/app/(.*)$", "^@/components/(.*)$", "^[./]"],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true,
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

- **TypeScript**: 타입 안정성을 높이기 위해 TypeScript를 사용합니다. `tsconfig.json` 파일에 다음과 같이 구성되어 있습니다:

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

- **TailwindCSS**: CSS 프레임워크로 스타일링을 돕습니다. `tailwind.config.ts` 파일에 다음과 같이 구성되어 있습니다:

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

- **Husky**: Git 훅을 사용하여 커밋 전 테스트를 실행합니다.
- **Commitlint**: 커밋 메시지의 형식을 검사합니다.

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

Google 및 Kakao 소셜 로그인 설정을 위해서는 `next-auth` 라이브러리를 사용합니다. 인증을 위해 `.env` 파일에 다음과 같은 환경 변수를 설정해야 합니다:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
KAKAO_CLIENT_ID=your-kakao-client-id
KAKAO_CLIENT_SECRET=your-kakao-client-secret
```

이 템플��을 사용하면 최신 웹 개발 기술을 활용한 프로젝트를 빠르게 시작할 수 있습니다. 각 기술과 도구의 설정이 미리 되어 있어, 개발에 즉시 착수할 수 있습니다.
