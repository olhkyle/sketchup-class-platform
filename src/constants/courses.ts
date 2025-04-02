type Course = (typeof courses)[number];

const courses = [
  "2025.04 ~ 05",
  "2025.02 ~ 03",
  "2024.12 ~ 2025.01",
  "2024.10 ~ 11",
] as const;

export type { Course };
export { courses };
