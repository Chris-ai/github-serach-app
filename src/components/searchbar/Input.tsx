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
    <div className="flex w-full relative dark:bg-deepblue">
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="Search GitHub username..."
        className="text-[13px] md:text-[18px] dark:text-white dark:placeholder:text-white flex-1 text-steelblue outline-none cursor-pointer dark:bg-deepblue"
      />
      <div className="absolute right-0 text-error text-[13px] md:text-[15px] font-bold bg-white dark:bg-deepblue px-1">
        {errorMessage}
      </div>
    </div>
  );
};

export default Input;
