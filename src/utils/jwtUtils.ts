import axios from "axios";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

const secret = process.env.NEXT_PUBLIC_AUTH_SECRET;

/**
 * accessToken의 만료 여부를 확인하고 만료가 임박한 경우 갱신합니다.
 * @param req - NextRequest 객체
 * @returns 갱신된 accessToken 또는 갱신이 필요없는 경우/실패한 경우 null
 */
export async function checkAndRefreshAccessToken(req: NextRequest) {
  // JWT 토큰 추출
  const token = await getToken({ req, secret });

  if (!token) {
    console.log("토큰을 찾을 수 없거나 유효하지 않습니다.");
    return null;
  }

  // 현재 시간과 토큰 만료 시간의 차이 계산 (초 단위)
  const currentTime = Math.floor(Date.now() / 1000);
  const timeRemaining = typeof token.exp === "number" ? token.exp - currentTime : 0;

  // 만료까지 2분 이하로 남은 경우 토큰 갱신 진행
  if (timeRemaining < 2 * 60) {
    try {
      // refreshToken을 이용해 새로운 accessToken 요청
      const refreshToken = token.refreshToken;
      if (!refreshToken) {
        console.error("리프레시 토큰이 존재하지 않습니다.");
        return null;
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh-token`, // 토큰 갱신 엔드포인트
        { refreshToken },
        { withCredentials: true }
      );

      // 새로 발급받은 accessToken 추출
      const newAccessToken = response.data.accessToken;

      if (newAccessToken) {
        console.log("액세스 토큰이 성공적으로 갱신되었습니다.");
      } else {
        console.error("액세스 토큰 갱신에 실패했습니다.");
      }
    } catch (error) {
      console.error("토큰 갱신 중 오류 발생:", error);
    }
  }
}
