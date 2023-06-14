import GlassCard from "@/components/UI/GlassCardsComments";
import getCommentById from "@/lib/db/Comments/getCommentsById";
import getUserById from "@/lib/db/Users/getUserById";
import React from "react";

async function Comments({ postId, userId }) {
  const comments = await getCommentById(postId);
  const user = await getUserById(userId);

  return comments.map((comment, index) => (
    <div key={index} className="w-1/3 p-2 ">
      <GlassCard comment={comment} user={user} />
    </div>
  ));
}

export default Comments;
