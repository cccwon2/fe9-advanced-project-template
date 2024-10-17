"use client";

import { useState } from "react";

import { login } from "@/lib/api/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      console.log("로그인 성공:", data);
      // 로그인 성공 후 처리 (예: 홈 페이지로 리다이렉트)
    } catch (error) {
      console.error("로그인 실패:", error);
      // 에러 처리
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h1 className="mb-6 text-3xl font-bold">로그인</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
          className="mb-4 w-full rounded border p-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className="mb-4 w-full rounded border p-2"
        />
        <button type="submit" className="w-full rounded bg-blue-500 p-2 text-white">
          로그인
        </button>
      </form>
    </div>
  );
}
