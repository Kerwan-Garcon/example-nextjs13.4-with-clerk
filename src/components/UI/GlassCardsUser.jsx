"use client";
import Image from "next/image";
import React from "react";
import deleteUsers from "@/lib/db/Users/deleteUsers";
import Link from "next/link";

const GlassCard = ({ user = {}, paramUserId = 0 }) => {
  const { name, username, email, id: idUser } = user;
  const [href, setHref] = React.useState({
    href: `/${idUser}`,
    txt: "Users informations ->",
  });

  React.useEffect(() => {
    if (paramUserId != 0)
      setHref({ href: `/${paramUserId}/posts`, txt: "Posts of Users ->" });
  }, []);

  return (
    <div
      className={`bg-sky-200 bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg w-4/5 mx-auto min-h-[250px] flex flex-col justify-between`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h2 className=" text-lg font-semibold">{name}</h2>
        </div>
        <div
          className=" bg-opacity-20 p-1 rounded-full cursor-pointer"
          onClick={async () =>
            await deleteUsers(user.id).then(() => console.log(user.id))
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <p className="">
        {username} - {email}
      </p>
      <div className="mt-4">
        <Link href={href.href} className="text-sm">
          {href.txt}
        </Link>
      </div>
    </div>
  );
};

export default GlassCard;
