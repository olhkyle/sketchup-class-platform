import RegisterForm from "@/components/RegisterForm";

export default async function page() {
  return (
    <div className="flex justify-center items-center mx-auto p-4 h-[calc(100dvh-144px)]">
      <RegisterForm />
    </div>
  );
}
