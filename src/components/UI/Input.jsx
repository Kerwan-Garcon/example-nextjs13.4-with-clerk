"use client";
import React, { useEffect } from "react";
import { useAtomValue } from "jotai";
import { darkModeAtom } from "@/components/jotai/darkModeAtom";

function Input(props) {
  const darkMode = useAtomValue(darkModeAtom);
  const [value, setValue] = React.useState(props.value);
  const { classNames = "", ...otherProps } = props;

  useEffect(() => {
    console.log("darkMode", darkMode);
  }, [darkMode]);

  return (
    <input
      {...otherProps}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
      className={
        "bg-transparent border-b-2 border-b-slate-500  px-2 py-1.5 select-none focus:outline-none focus:border-b-2 focus:border-teal-400  " +
        classNames
      }
    />
  );
}

export default Input;
