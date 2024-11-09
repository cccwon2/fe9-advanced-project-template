import { AuthResponse } from "@/types/auth";
import { SigninSchema, SignupSchema } from "@/zod/authSchema";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const useAuth = () => {
  const router = useRouter();

  // 회원가입 mutation
  const signupMutation = useMutation({
    mutationFn: async (data: SignupSchema) => {
      const response = await axios.post<AuthResponse>("/api/auth/signup", data, { withCredentials: true });
      return response.data;
    },
    onSuccess: () => {
      toast.success("회원가입이 완료되었습니다!");
      router.push("/login");
    },
    onError: (error: Error) => {
      toast.error(error.message || "회원가입 중 오류가 발생했습니다.");
    },
  });

  // 로그인 mutation
  const signinMutation = useMutation({
    mutationFn: async (data: SigninSchema) => {
      const response = await axios.post<AuthResponse>("/api/auth/signin", data, { withCredentials: true });
      return response.data;
    },
    onSuccess: () => {
      toast.success("로그인되었습니다!");
      router.push("/");
      router.refresh(); // 전역 상태 갱신을 위한 새로고침
    },
    onError: (error: Error) => {
      toast.error(error.message || "로그인 중 오류가 발생했습니다.");
    },
  });

  const signup = (data: SignupSchema) => {
    signupMutation.mutate(data);
  };

  const signin = (data: SigninSchema) => {
    signinMutation.mutate(data);
  };

  return {
    signup,
    signin,
    isSignupLoading: signupMutation.isPending,
    isSigninLoading: signinMutation.isPending,
    signupError: signupMutation.error,
    signinError: signinMutation.error,
  };
};
