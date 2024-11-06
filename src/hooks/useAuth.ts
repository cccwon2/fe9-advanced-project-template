import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

import { getUserProfile } from "@/app/api/user";

export function useAuth() {
  const { user, loading, setUser, setLoading } = useAuthStore();

  useEffect(() => {
    async function loadUser() {
      try {
        const userData = await getUserProfile();
        setUser(userData);
      } catch (error) {
        console.error("사용자 프로필 로딩 실패:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [setUser, setLoading]);

  return { user, loading };
}
