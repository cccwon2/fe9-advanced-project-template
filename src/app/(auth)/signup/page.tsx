"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await axios.post("/api/auth/signup", { email, nickname, password });
      console.log("회원가입 성공:", data);
      router.push("/auth/signin");
    } catch (error) {
      console.error("회원가입 실패:", error);
      // 에러 처리
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" />
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="닉네임" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
