"use client";

import { useAtom } from "jotai";
import { darkModeAtom } from "@/components/jotai/darkModeAtom";
import { menuAtom } from "@/components/jotai/menuAtom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  const [theme, setTheme] = useAtom(darkModeAtom);
  const [menu, setMenu] = useAtom(menuAtom);
  const toggleDarkMode = () => setTheme((theme) => !theme);
  const toggleMenu = () => setMenu((menu) => !menu);

  return (
    <nav className="w-full flex justify-between p-4 relative ">
      <Link href="/">Next js 13</Link>
      <div className="fixed justify-end items-center w-full right-7 z-50 flex gap-8 ">
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${!theme ? "text-black" : "text-white"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={!menu ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </button>
        <UserButton afterSignOutUrl="/" />
        <button
          className={`border rounded-full shadow-inner p-1.5 hover:bg-opacity-70 ${
            !theme
              ? "text-black border-slate-400 bg-slate-100 hover:bg-sky-200  shadow-sky-200"
              : "text-white border-slate-400 bg-slate-900 hover:bg-emerald-200 hover:border-emerald-700  shadow-emerald-400"
          }`}
          onClick={toggleDarkMode}
        >
          {!theme ? (
            <FontAwesomeIcon icon={faMoon} className="px-1.5" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="px-1" />
          )}
        </button>
      </div>
      <div
        className={`${
          !theme ? "bg-slate-100" : "bg-slate-900"
        } flex flex-col gap-4 fixed top-16 right-0 w-64 p-4 shadow-lg transition-opacity rounded-tl-2xl rounded-bl-2xl mb-auto z-50 bg-opacity-20 backdrop-filter backdrop-blur-lg ${
          menu ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link
          href="/"
          className={`p-2 hover:shadow-inner border-b-slate-300 border-b hover:bg-opacity-70 ${
            !theme ? "hover:bg-sky-300 " : "hover:bg-emerald-300  "
          }  hover:rounded-lg`}
        >
          Users
        </Link>
        <Link
          href="/posts"
          className={`p-2 hover:shadow-inner border-b-slate-300 border-b hover:bg-opacity-70 ${
            !theme ? "hover:bg-sky-300 " : "hover:bg-emerald-300  "
          }  hover:rounded-lg`}
        >
          Posts
        </Link>
        <Link
          href="/posts/1/comments"
          className={`p-2 hover:shadow-inner border-b-slate-300 border-b hover:bg-opacity-70 ${
            !theme ? "hover:bg-sky-300 " : "hover:bg-emerald-300  "
          }  hover:rounded-lg`}
        >
          Comments
        </Link>
      </div>
    </nav>
  );
};

export default Header;
