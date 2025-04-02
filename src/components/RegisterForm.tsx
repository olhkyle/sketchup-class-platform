"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { courses } from "@/constants/courses";
import { toast } from "sonner";

const formSchema = z.object({
  course: z.string({
    required_error: "선택해 주세요",
  }),
  username: z
    .string()
    .min(2, { message: "최소 2글자 이상 입력해 주세요" })
    .max(4),
  email: z
    .string({ required_error: "이메일을 입력해 주세요" })
    .email({ message: "이메일 형식이 올바르지 않습니다" }),
});

export default function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      course: courses[0],
      username: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const today = new Date().toISOString().slice(0, 10);

    try {
      console.log(values);
      toast("✅ 성공적으로 등록되었습니다", {
        description: today,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-20 space-y-10 sm:w-2/4"
      >
        <h2 className="text-lg font-bold">📋 수업자료 공유를 위한 등록</h2>
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>코 스</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full cursor-pointer">
                    <SelectValue placeholder="코스 선택" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem
                      key={course}
                      value={course}
                      className="cursor-pointer"
                    >
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이 름</FormLabel>
              <FormControl>
                <Input
                  placeholder="홍길동"
                  {...field}
                  className="min-w-[300px] cursor-pointer"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  {...field}
                  className="min-w-[300px] cursor-pointer"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-semibold cursor-pointer">
          제출하기
        </Button>
      </form>
    </Form>
  );
}
