type Route<T> = T[keyof T] | (string & {});

const routes = {
  HOME: "/",
  REGISTER: "/register",
  WIP: "/wip",
} as const;

export type { Route };
export { routes };
