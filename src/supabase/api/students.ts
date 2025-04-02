import { RegisterFormSchema } from "@/components";
import { createClient } from "../client";
import table from "../table";
import { Course } from "@/constants/courses";

const getStudentsByCurrentCourse = async (course: Course) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(table.STUDENTS)
    .select("*")
    .eq("course", course);

  if (error) {
    throw new Error(error.message);
  }

  return { data };
};

const addStudent = async (values: RegisterFormSchema) => {
  const supabase = createClient();
  const { error } = await supabase.from(table.STUDENTS).insert(values);

  if (error) {
    throw new Error(error.message);
  }
};

export { getStudentsByCurrentCourse, addStudent };
