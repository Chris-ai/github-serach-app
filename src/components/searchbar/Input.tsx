"use client";
import { useUserContext } from "@/app/context/userContext";
import React from "react";

const Input: React.FC = () => {
  const { setUsername, errorMessage, setErrorMessage } = useUserContext();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");
    setUsername(event.target.value);
  };

  return (
    <div className="flex w-full relative">
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="Search GitHub username..."
        className="text-[13px] md:text-[18px] flex-1 text-steelblue outline-none cursor-pointer"
      />
      <div className="absolute right-0 text-error text-[13px] md:text-[15px] font-bold bg-white px-1">
        {errorMessage}
      </div>
    </div>
  );
};

export default Input;
