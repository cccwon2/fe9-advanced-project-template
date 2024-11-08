"use client";

import axios from "axios";
import { useState } from "react";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await axios.post("/api/auth/signin", { email, password });
      console.log("로그인 성공:", data);
      // 로그인 성공 후 처리 (예: 홈 페이지로 리다이렉트)
    } catch (error) {
      console.error("로그인 실패:", error);
      // 에러 처리
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>로그인</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
