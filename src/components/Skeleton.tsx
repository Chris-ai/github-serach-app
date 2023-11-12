import classNames from "classnames";
import React from "react";

interface IProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Skeleton: React.FC<IProps> = ({
  isLoading,
  children,
  className,
}) => {
  if (isLoading) {
    return (
      <div
        className={classNames(
          "bg-slate-200 flex animate-pulse rounded-lg",
          className
        )}
      ></div>
    );
  }

  return children;
};
