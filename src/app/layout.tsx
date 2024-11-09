import type { Metadata } from "next";
import React from "react";

import ClientLayout from "./clientLayout";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "FE9 Advanced Project Template",
  description: "FE9 Advanced Project Template",
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
        <main>
          <ClientLayout>{children}</ClientLayout>
        </main>
      </body>
    </html>
  );
}
