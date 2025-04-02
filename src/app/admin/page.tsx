import { StudentListWithTrigger } from "@/components/admin";

export default async function AdminPage() {
  return (
    <section className="mt-4 py-10">
      <h2 className="mb-4 text-xl font-bold">수강생 리스트</h2>
      <StudentListWithTrigger />
    </section>
  );
}
