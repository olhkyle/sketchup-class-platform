import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="mt-14 mx-auto w-dvw text-black bg-white sm:max-w-[1200px]">
      {children}
    </main>
  );
}
