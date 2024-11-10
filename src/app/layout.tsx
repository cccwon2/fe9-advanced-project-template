import type { Metadata } from "next";
import React from "react";

import ClientLayout from "./clientLayout";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "FE9 Advanced Project Template",
  description: "FE9 중급 및 고급 프로젝트 템플릿",
  keywords: ["키워드1", "키워드2", "키워드3"],
  authors: [{ name: "Your Name" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "FE9 Advanced Project Template",
    description: "FE9 중급 및 고급 프로젝트 템플릿",
    url: "https://your-domain.com",
    siteName: "FE9 Advanced Project",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FE9 Advanced Project Template",
    description: "FE9 중급 및 고급 프로젝트 템플릿",
    images: ["https://your-domain.com/og-image.jpg"],
  },
  verification: {
    google: "구글 인증 코드",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
