"use client";

import { useEffect, useState } from "react";
import { Course } from "@/constants/courses";
import { useLoading } from "@/hooks";
import { Student } from "@/supabase/schema";
import { getStudentsByCurrentCourse } from "@/supabase/api/students";

interface StudentListProps {
  currentCourse: Course;
}

export default function StudentList({ currentCourse }: StudentListProps) {
  const { startTransition, isLoading, Loading } = useLoading();
  const [students, setStudents] = useState<Student[] | null>(null);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const { data } = await startTransition(
          getStudentsByCurrentCourse(currentCourse)
        );

        setStudents(data);
      } catch (e) {
        console.error(e);
      }
    };

    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCourse]);

  return (
    <div className="flex justify-center items-center min-w-[300px] min-h-[200px]">
      {isLoading ? (
        Loading()
      ) : (
        <>
          {students?.length === 0 ? (
            <div>⚠️ 데이터가 없습니다.</div>
          ) : (
            <ul className="flex flex-col gap-4 mt-10 w-full">
              <li className="flex gap-6 font-bold">
                <div>이름</div>
                <div>이메일</div>
              </li>
              {students?.map((student) => (
                <li key={student.id} className="flex gap-6">
                  <div className="font-bold">{student.username}</div>
                  <div>{student.email}</div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
