import { z } from "zod";

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

const registerFormSchema = z.object({
  course: z.string({
    required_error: "선택해 주세요",
  }),
  username: z
    .string()
    .regex(/^[가-힣]+$/, { message: "한글만 입력 가능합니다" })
    .min(2, { message: "최소 2글자 이상 입력해 주세요" })
    .max(4, { message: "최대 4글자로 입력해 주세요" }),
  email: z
    .string({ required_error: "이메일을 입력해 주세요" })
    .email({ message: "이메일 형식이 올바르지 않습니다" }),
});

export type { RegisterFormSchema };
export { registerFormSchema };
