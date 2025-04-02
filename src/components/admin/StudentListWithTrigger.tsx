"use client";

import { Suspense, useState } from "react";
import { CourseSelect, StudentList } from ".";
import { Course, courses } from "@/constants/courses";

const StudentListWithTrigger = () => {
  const [course, setCourse] = useState<Course>(courses[0]);

  return (
    <>
      <CourseSelect value={course} setValue={setCourse} />
      <Suspense fallback={<div>Loading...</div>}>
        <StudentList currentCourse={course} />
      </Suspense>
    </>
  );
};

export default StudentListWithTrigger;
