# FE9 중급 프로젝트 템플릿

## 소개

**FE9 중급 프로젝트 템플릿**은 Next.js, React, TypeScript, TailwindCSS 등 최신 기술 스택을 기반으로 한 프론트엔드 프로젝트 템플릿입니다. 이 템플릿은 소셜 로그인 기능과 이미지 업로드 기능 등을 포함하여 중급 수준의 웹 애플리케이션 개발에 적합하도록 구성되어 있습니다.

## 주요 기능 및 기술 스택

- **Next.js 14.2.15**: 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 지원하는 React 프레임워크입니다.
- **React 18**: 최신 버전의 React 라이브러리입니다.
- **TypeScript 5**: 정적 타입 언어로, 코드 품질과 생산성을 높여줍니다.
- **Tailwind CSS 3.4.14**: 유틸리티 기반의 CSS 프레임워크로, 빠르고 효율적인 스타일링을 제공합니다.
- **NextAuth.js 4.25.0**: Google과 Kakao 소셜 로그인 기능을 위한 인증 라이브러리입니다.
- **Axios 1.7.7**: HTTP 요청을 간편하게 처리할 수 있는 라이브러리입니다.
- **Jotai 2.10.1**: 간결하고 사용하기 쉬운 전역 상태 관리 라이브러리입니다.
- **Formidable 3.5.1**: 서버 측 파일 업로드 처리를 위한 라이브러리입니다.
- **Sharp 0.33.5**: 이미지 최적화 및 변환을 위한 라이브러리입니다.

## 설치 및 실행 방법

### 1. 의존성 설치

먼저 프로젝트의 의존성을 설치합니다:

```bash
npm install
```

또는

```bash
yarn install
```

### 2. 개발 서버 실행

개발 환경에서 서버를 실행하려면 다음 명령어를 사용하세요:

```bash
npm run dev
```

또는

```bash
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인할 수 있습니다.

### 3. 빌드 및 배포

프로덕션용으로 애플리케이션을 빌드하려면 다음 명령어를 사용하세요:

```bash
npm run build
```

또는

```bash
yarn build
```

빌드가 완료되면, 서버를 시작할 수 있습니다:

```bash
npm run start
```

또는

```bash
yarn start
```

### 4. Vercel 배포

이 프로젝트는 **Vercel**을 사용하여 쉽게 배포할 수 있습니다. Vercel은 Next.js 애플리케이션에 최적화된 배포 플랫폼입니다.

1. **Vercel 계정 생성 및 로그인**:

   - [Vercel 홈페이지](https://vercel.com/)에 방문하여 계정을 생성하고 로그인합니다.

2. **GitHub 연결**:

   - Vercel을 GitHub와 연결하여 리포지토리를 가져올 수 있습니다. 프로젝트 리포지토리를 선택하여 Vercel에 연결하세요.

3. **프로젝트 설정**:

   - 프로젝트의 환경 변수를 설정합니다. `.env` 파일에 있는 변수들을 Vercel의 프로젝트 설정 페이지에서 추가하세요.

4. **배포**:
   - 모든 설정이 완료되면 **Deploy** 버튼을 눌러 프로젝트를 배포할 수 있습니다. 배포 후 Vercel에서 제공하는 URL을 통해 애플리케이션에 접근할 수 있습니다.

## 프로젝트 구조

프로젝트의 기본 디렉터리 구조는 다음과 같습니다:

```
/
├── pages/          # Next.js 페이지 컴포넌트
├── components/     # 재사용 가능한 React 컴포넌트
├── styles/         # 전역 스타일 및 TailwindCSS 설정 파일
├── public/         # 정적 파일 (이미지, 폰트 등)
├── utils/          # 유틸리티 함수
└── ...
```

## 스크립트 설명

- **`dev`**: 개발 서버를 실행합니다.
- **`build`**: 프로덕션 빌드를 생성합니다.
- **`start`**: 프로덕션 빌드를 기반으로 서버를 실행합니다.
- **`lint`**: ESLint를 사용하여 코드 스타일을 검사합니다.
- **`clean`**: `.next`와 `out` 디렉터리를 삭제합니다.

## 주요 의존성

- **`axios`**: HTTP 요청 처리를 위한 클라이언트입니다.
- **`cookie`, `js-cookie`**: 쿠키를 다루기 위한 라이브러리입니다.
- **`cors`**: 서버 간의 리소스 공유를 관리합니다.
- **`date-fns`**: 날짜 처리를 쉽게 도와주는 라이브러리입니다.
- **`formidable`**: 파일 업로드 처리를 위한 서버 측 라이브러리입니다.
- **`sharp`**: 이미지 처리 라이브러리로, 이미지 최적화에 사용됩니다.

## 개발 환경 설정

- **ESLint**: 프로젝트의 코드 품질을 보장하기 위해 ESLint를 설정했습니다.
- **TypeScript**: 타입 안정성을 높이기 위해 TypeScript를 사용합니다.
- **TailwindCSS**: CSS 프레임워크로 스타일링을 돕습니다.

## 소셜 로그인 설정

Google 및 Kakao 소셜 로그인 설정을 위해서는 `next-auth` 라이브러리를 사용합니다. 인증을 위해 `.env` 파일에 다음과 같은 환경 변수를 설정해야 합니다:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
KAKAO_CLIENT_ID=your-kakao-client-id
KAKAO_CLIENT_SECRET=your-kakao-client-secret
```
