"use client";
import React from "react";
import Link from "next/link";

const GlassCard = ({ post = {}, user = {} }) => {
  const { title, body, id: idPost, userId } = post;
  const [href, setHref] = React.useState({
    href: `/${userId}/posts/${idPost}/comments`,
    txt: "See Comments ->",
  });

  return (
    <div
      className={`bg-sky-200 bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg w-4/5 mx-auto min-h-[250px] flex flex-col justify-between`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col  justify-start">
          <h2 className=" text-xl font-bold">{user[0].username}</h2>
          <h3 className=" text-md italic font-semibold">{title}</h3>
        </div>
      </div>
      <p className="text-sm text-justify">{body}</p>
      <div className="mt-4">
        <Link href={href.href} className=" text-sm">
          {href.txt}
        </Link>
      </div>
    </div>
  );
};

export default GlassCard;
