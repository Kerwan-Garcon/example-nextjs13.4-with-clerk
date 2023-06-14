"use client";
import Image from "next/image";
import React from "react";
import deleteUsers from "@/lib/db/Users/deleteUsers";
import Link from "next/link";

// for example , kinda lazy to do 3 different components
const GlassCard = ({ user = {}, comment = {} }) => {
  const { postId, id, body, name, email } = comment;
  const [href, setHref] = React.useState({
    href: `mailto:${email}`,
    txt: `Send mail to ${email} ->`,
  });

  return (
    <div
      className={`bg-sky-200 bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg w-4/5 mx-auto min-h-[250px]`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-start flex-col justify-center">
          <h2 className=" text-xl font-bold">{email}</h2>
          <h3 className=" text-md italic font-semibold">{name}</h3>
        </div>
      </div>
      <p className="text-sm text-justify">{body}</p>
      <div className="mt-4">
        <a href={href.href} className=" text-sm">
          {href.txt}
        </a>
      </div>
    </div>
  );
};

export default GlassCard;
