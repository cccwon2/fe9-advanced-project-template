import type { Metadata } from "next";
import React from "react";

import ClientLayout from "./clientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "FE9 Advanced Project Template",
  description: "FE9 중급 및 고급 프로젝트 템플릿",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
