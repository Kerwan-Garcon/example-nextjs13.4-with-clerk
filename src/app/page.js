import { Suspense } from "react";
import Input from "@/components/UI/Input";
import SkeletonGlassCards from "@/components/UI/Skeleton/SkeletonGlassCards";
import Users from "@/components/Features/Users";
import { auth, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  const { firstName, lastName, email } = await currentUser();

  console.log(await currentUser());
  async function connexion(formData) {
    "use server";
    const title = formData.get("title");
    const email = formData.get("email");
    const username = formData.get("username");
    console.log(title, email, username);
  }

  return (
    <main className="">
      <div className="text-center text-xl italic">
        Hello {firstName}, nice to see you back!
      </div>
      <section className="h-full flex flex-col justify-center items-center my-28 gap-8">
        <form action={connexion} className="flex gap-8">
          <Input type="text" name="title" placeholder=" Name" />
          <Input type="text" name="email" placeholder=" Email" />
          <Input type="text" name="title" placeholder=" Username" />
          <button
            className="p-2 bg-transparent border-2 border-teal-400  rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
        <Suspense fallback={<SkeletonGlassCards />}>
          <div className="flex flex-wrap justify-between items-center w-full">
            <Users />
          </div>
        </Suspense>
      </section>
    </main>
  );
}
