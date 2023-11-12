"use client";

import React from "react";
import { useThemeContext } from "@/app/context/themeContext";
import ThemeIcon from "./icons/ThemeIcon";

const ThemeButton = () => {
  const { toggleThemeHandler, themeTitle } = useThemeContext();

  return (
    <button
      className="flex gap-x-4 items-center justify-center outline-none bg-transparent group"
      onClick={toggleThemeHandler}
    >
      <p
        className={
          "text-bluegray font-bold dark:text-white group-hover:text-hoverDark dark:group-hover:text-hoverLight"
        }
      >
        {themeTitle}
      </p>
      <ThemeIcon className="'hover:fill-hoverDark dark:hover:fill-hoverLight group-hover:fill-hoverDark dark:group-hover:fill-hoverLight" />
    </button>
  );
};

export default ThemeButton;
