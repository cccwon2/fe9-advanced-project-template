"use client";

import { useAuth } from "@/hooks/useAuth";
import { type SignupSchema, signupSchema } from "@/zod/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignupPage() {
  const { signup, isSignupLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupSchema) => {
    signup(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">회원가입</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            이미 계정이 있으신가요?{" "}
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              로그인하기
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <input
                {...register("email")}
                type="email"
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="이메일"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <input
                {...register("nickname")}
                type="text"
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="닉네임"
              />
              {errors.nickname && <p className="mt-1 text-sm text-red-600">{errors.nickname.message}</p>}
            </div>
            <div>
              <input
                {...register("password")}
                type="password"
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="비밀번호"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
            </div>
            <div>
              <input
                {...register("confirmPassword")}
                type="password"
                className="relative block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="비밀번호 확인"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSignupLoading}
              className="group relative flex w-full justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400"
            >
              {isSignupLoading ? "회원가입 중..." : "회원가입"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
