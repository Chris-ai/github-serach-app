"use client";
import { useUserContext } from "@/app/context/userContext";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ children }) => {
  const { isLoading, fetchUserByUsername } = useUserContext();

  const handleClick = () => {
    fetchUserByUsername();
  };

  return (
    <button
      className="bg-azure p-3 rounded-[10px] text-white text-center text-[14px] md:text-base font-bold lg:px-6 hover:bg-buttonHover"
      onClick={handleClick}
      disabled={isLoading}
    >
      {children}
    </button>
  );
};

export default Button;
