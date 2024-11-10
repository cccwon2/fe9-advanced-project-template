import { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

import apiClient from "@/app/api/apiClient";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const { email, nickname, password, confirmPassword } = await request.json();
    const response = await apiClient.post("/auth/signup", {
      email,
      nickname,
      password,
      passwordConfirmation: confirmPassword,
    });
    const { accessToken, refreshToken, user } = response.data;

    return NextResponse.json({ accessToken, refreshToken, user }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(error);
      if (error.response) {
        return NextResponse.json({ message: error.response.data.message }, { status: error.response.status });
      }
    }
    return NextResponse.json({ message: "로그인 실패" }, { status: 500 });
  }
};
