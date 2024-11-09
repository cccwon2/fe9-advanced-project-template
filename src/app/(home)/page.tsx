"use client";

import Link from "next/link";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        {/* 히어로 섹션 */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">FE9 Advanced Project</h1>
            <p className="mb-8 text-xl md:text-2xl">Next.js와 함께하는 새로운 웹 경험</p>
            <div className="space-x-4">
              <Link
                href="/signup"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                시작하기
              </Link>
              <Link
                href="/login"
                className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                로그인
              </Link>
            </div>
          </div>
        </section>

        {/* 특징 섹션 */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="p-6 text-center">
                <h3 className="mb-4 text-xl font-semibold">빠른 성능</h3>
                <p className="text-gray-600">Next.js의 서버 사이드 렌더링으로 최적화된 성능을 제공합니다.</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-4 text-xl font-semibold">안전한 인증</h3>
                <p className="text-gray-600">보안이 강화된 인증 시스템으로 안전한 서비스를 이용하세요.</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-4 text-xl font-semibold">반응형 디자인</h3>
                <p className="text-gray-600">모든 디바이스에서 최적화된 사용자 경험을 제공합니다.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
