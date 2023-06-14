import React from "react";
import GlassCard from "@/components/UI/GlassCardsPosts";
import getPosts from "@/lib/db/Posts/getPosts";
import getPostsById from "@/lib/db/Posts/getPostsById";
import getUserById from "@/lib/db/Users/getUserById";

async function Posts({ userId = null }) {
  let posts = null;
  let user = null;

  if (userId === null) posts = await getPosts();
  else {
    posts = await getPostsById(userId);
    user = await getUserById(userId);
  }

  console.log(user);

  return posts.map((post, index) => (
    <div key={index} className="w-1/3 p-2 ">
      <GlassCard post={post} user={user} />
    </div>
  ));
}

export default Posts;
