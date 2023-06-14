"use client";

import React, { useEffect } from "react";
import { useAtomValue, useAtom, useSetAtom } from "jotai";
import { darkModeAtom } from "@/components/jotai/darkModeAtom";

function Body({ children }) {
  const darkMode = useAtomValue(darkModeAtom);

  useEffect(() => {
    console.log("darkModeBODY", darkMode);
  }, [darkMode]);

  return (
    <body
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {children}
    </body>
  );
}

export default Body;
