"use client";

import Image from "next/image";
import React from "react";
import IconMoon from "@/assets/icon-moon.svg";
import { useDarkMode } from "usehooks-ts";

const ThemeButton = () => {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <button
      className="flex gap-x-4 items-center justify-center outline-none bg-transparent"
      onClick={toggle}
    >
      <p>{isDarkMode ? "LIGHT" : "DARK"}</p>
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
