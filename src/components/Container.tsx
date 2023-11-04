import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => {
  return (
    <div className="px-6 pt-8 pb-20 h-full grid place-items-center">
      {children}
    </div>
  );
};

export default Container;
