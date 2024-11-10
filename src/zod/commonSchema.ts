import { z } from "zod";

export const emailSchema = z.string().email("올바른 이메일 형식이 아닙니다.");

export const passwordSchema = z
  .string()
  .min(8, "비밀번호는 최소 8자 이상이어야 합니다")
  .regex(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
    "비밀번호는 영문, 숫자, 특수문자(@$!%*?&#)를 모두 포함해야 합니다"
  );

export const dateSchema = z
  .string()
  .datetime({ message: "유효한 ISO 8601 형식의 날짜여야 합니다" })
  .refine((date) => {
    // ISO 8601 UTC 형식 검증 (예: "2024-03-19T12:34:56.789Z")
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
    return isoRegex.test(date);
  }, "UTC 타임존(Z)이 포함된 ISO 8601 형식이어야 합니다");

export const imageUrlSchema = z.string().url("올바른 이미지 URL이 아닙니다.");
