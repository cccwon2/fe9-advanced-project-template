import { loadingAtom, userAtom } from "@/store/auth";
import { useAtom } from "jotai";
import { useEffect } from "react";

import { getUserProfile } from "@/lib/api/user";

export function useAuth() {
  const [user, setUser] = useAtom(userAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  useEffect(() => {
    async function loadUser() {
      try {
        const userData = await getUserProfile();
        setUser(userData);
      } catch (error) {
        console.error("사용자 프로필 로딩 실패:", error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [setUser, setLoading]);

  return { user, loading };
}
