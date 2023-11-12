"use client";

import Image from "next/image";
import React, { useContext } from "react";
import IconMoon from "@/assets/icon-moon.svg";
import { useThemeContext } from "@/app/context/themeContext";

const ThemeButton = () => {
  const { toggleThemeHandler, themeTitle } = useThemeContext();

  return (
    <button
      className="flex gap-x-4 items-center justify-center outline-none bg-transparent"
      onClick={toggleThemeHandler}
    >
      <p>{themeTitle}</p>
      <Image
        src={IconMoon}
        alt="icon-moon"
        height={20}
        width={20}
        className="w-5 h-5"
      />
    </button>
  );
};

export default ThemeButton;
