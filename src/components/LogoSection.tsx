import React from "react";
import ThemeButton from "./ThemeButton";

const LogoSection: React.FC = () => {
  return (
    <div className="flex justify-between mb-2">
      <div>
        <h1 className="text-[1.625rem] font-bold dark:text-white">devfinder</h1>
      </div>
      <ThemeButton />
    </div>
  );
};

export default LogoSection;
