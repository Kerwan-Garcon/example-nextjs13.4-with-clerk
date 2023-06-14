import React, { Suspense } from "react";
import Input from "@/components/UI/Input";
import SkeletonGlassCards from "@/components/UI/Skeleton/SkeletonGlassCards";
import Posts from "@/components/Features/Posts";
import { redirect } from "next/navigation";
import Comments from "@/components/Features/Comments";

async function page({ params: { id, idUser } }) {
  async function changeUser(formData) {
    "use server";
    const id = formData.get("id");
    redirect(`/posts/${id}`);
  }

  return (
    <main className="">
      <section className="h-full flex flex-col justify-center items-center my-28 gap-8">
        <form
          action={changeUser}
          className="flex gap-8 justify-center items-center"
        >
          <span>Post of user number</span>{" "}
          <Input
            type="text"
            name="id"
            placeholder="ID"
            value={id}
            classNames="w-14 text-center"
          />
          <button
            className="p-2 bg-transparent border-2 border-teal-400  rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>

        <Suspense fallback={<SkeletonGlassCards />}>
          <div className="flex flex-wrap justify-between items-center w-full">
            <Comments postId={id} userId={id} />
          </div>
        </Suspense>
      </section>
    </main>
  );
}

export default page;
