import React from "react";
import GlassCard from "@/components/UI/GlassCardsUser";
import getUsers from "@/lib/db/Users/getUsers";
import getUserById from "@/lib/db/Users/getUserById";

async function Users({ userId }) {
  let users = null;

  if (!userId) users = await getUsers();
  else {
    users = await getUserById(userId);
  }

  if (!users[0]?.username)
    return (
      <div className="w-full flex justify-center items-center">
        No user found
      </div>
    );

  return users.map((user, index) => (
    <div key={index} className="w-1/3 p-2 ">
      <GlassCard user={user} paramUserId={userId} />
    </div>
  ));
}

export default Users;
