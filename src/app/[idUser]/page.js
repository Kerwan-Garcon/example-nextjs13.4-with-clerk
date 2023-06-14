import { Suspense } from "react";
import Input from "@/components/UI/Input";
import SkeletonGlassCards from "@/components/UI/Skeleton/SkeletonGlassCards";
import Users from "@/components/Features/Users";
import { redirect } from "next/navigation";

export default async function UserPage({ params: { idUser } }) {
  async function insertUser(formData) {
    "use server";
    const title = formData.get("title");
    const email = formData.get("email");
    const username = formData.get("username");
    const id = formData.get("id");
    redirect(`/${id}`);
  }

  async function changeUser(formData) {
    "use server";
    const id = formData.get("id");
    redirect(`/${id}`);
  }

  return (
    <main className="">
      <section className="h-full flex flex-col justify-center items-center my-28 gap-8">
        <div className="flex flex-col gap-8">
          <form
            action={changeUser}
            className="flex gap-2 justify-center items-center"
          >
            <span>User number</span>
            <Input
              type="text"
              name="id"
              placeholder="Id"
              classNames="w-8 text-center"
            />
            <button
              className="p-2 bg-transparent border-2 border-teal-400  rounded-lg"
              type="submit"
            >
              Change
            </button>
          </form>
          <form action={insertUser} className="flex gap-8">
            <Input type="text" name="title" placeholder=" Name" />
            <Input type="text" name="email" placeholder=" Email" />
            <Input type="text" name="title" placeholder=" Username" />
            <button
              className="p-2 bg-transparent border-2 border-teal-400  rounded-lg"
              type="submit"
            >
              Insert
            </button>
          </form>
        </div>
        <Suspense fallback={<SkeletonGlassCards />}>
          <div className="flex flex-wrap justify-between items-center w-full">
            <Users userId={idUser} />
          </div>
        </Suspense>
      </section>
    </main>
  );
}
