import { Suspense } from "react";
import Input from "@/components/UI/Input";
import SkeletonGlassCards from "@/components/UI/Skeleton/SkeletonGlassCards";
import Posts from "@/components/Features/Posts";
import { redirect } from "next/navigation";

export default async function Home({ params: { idUser } }) {
  async function connexion(formData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("body");

    const insert = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: content,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  async function changeUser(formData) {
    "use server";
    const id = formData.get("id");
    redirect(`/${id}/posts`);
  }

  return (
    <main className="">
      <section className="h-full flex flex-col justify-center items-center my-28 gap-8">
        <div className="flex flex-col gap-8">
          <form
            action={changeUser}
            className="flex gap-2 justify-center items-center"
          >
            <span>See posts of user number</span>
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
          <form action={connexion} className="flex gap-8">
            <Input type="text" name="title" placeholder=" Title" />
            <Input type="text" name="content" placeholder=" Content" />
            <button
              className="p-2 bg-transparent border-2 border-teal-400  rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <Suspense fallback={<SkeletonGlassCards />}>
          <div className="flex flex-wrap justify-between items-center w-full">
            <Posts userId={idUser} />
          </div>
        </Suspense>
      </section>
    </main>
  );
}
