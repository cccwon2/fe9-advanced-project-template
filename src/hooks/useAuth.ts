import { useUserStore } from "@/store/userStore";
import { AuthResponse } from "@/types/auth";
import { LoginSchema, SignupSchema } from "@/zod/authSchema";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const useAuth = () => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

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
  const loginMutation = useMutation({
    mutationFn: async (data: LoginSchema) => {
      const response = await axios.post<AuthResponse>("/api/auth/login", data, { withCredentials: true });
      return response.data;
    },
    onSuccess: (data) => {
      setUser(data.user);
      toast.success("로그인되었습니다!");
      router.push("/");
      router.refresh();
    },
    onError: (error: Error) => {
      toast.error(error.message || "로그인 중 오류가 발생했습니다.");
    },
  });

  // 로그아웃 mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post<AuthResponse>("/api/auth/logout", {}, { withCredentials: true });
      return response.data;
    },
    onSuccess: () => {
      setUser(null);
      toast.success("로그아웃되었습니다!");
      router.push("/login");
      router.refresh();
    },
    onError: (error: Error) => {
      toast.error(error.message || "로그아웃 중 오류가 발생했습니다.");
    },
  });

  const signup = (data: SignupSchema) => {
    signupMutation.mutate(data);
  };

  const login = (data: LoginSchema) => {
    loginMutation.mutate(data);
  };

  const logout = () => {
    logoutMutation.mutate();
  };

  return {
    signup,
    login,
    logout,
    isSignupLoading: signupMutation.isPending,
    isLoginLoading: loginMutation.isPending,
    isLogoutLoading: logoutMutation.isPending,
    signupError: signupMutation.error,
    loginError: loginMutation.error,
    logoutError: logoutMutation.error,
  };
};
