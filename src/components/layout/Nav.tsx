import { routes } from "@/constants/routes";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center items-center my-0 mx-auto w-full border-b-[1px] border-gray-100 bg-gray-50 z-10">
      <div className="flex justify-between items-center min-w-[300px] w-full sm:max-w-[1200px] min-h-14">
        <h1 className="p-4 font-bold">
          <Link href={routes.HOME}>SketchUp Class</Link>
        </h1>
        <ul className="p-4">
          <li>
            <Link
              href={routes.REGISTER}
              className="px-4 py-2 text-gray-600 font-semibold rounded-md hover:bg-gray-200 transition-colors"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
