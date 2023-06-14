import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex justify-center items-center absolute mx-auto w-full h-full">
      <SignUp />
    </section>
  );
}
