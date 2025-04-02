type Route<T> = T[keyof T] | (string & {});

const routes = {
  HOME: "/",
  REGISTER: "/register",
} as const;

export type { Route };
export { routes };
