import React from "react";

interface IProps {
  repos: number;
  followers: number;
  following: number;
}

const CodeInfo: React.FC<IProps> = ({ repos, followers, following }) => {
  return (
    <div className="bg-lavender dark:bg-navyblue px-[14px] py-[18px] grid grid-cols-3 rounded-[10px] md:place-items-start md:pl-8">
      <div className="flex flex-col gap-y-2 items-center">
        <p className="text-steelblue dark:text-white text-[11px] md:text-[13px]">
          Repos
        </p>
        <p className="text-midnightblue dark:text-white  font-bold md:text-[22px]">
          {repos}
        </p>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <p className="text-steelblue dark:text-white text-[11px] md:text-[13px]">
          Followers
        </p>
        <p className="text-midnightblue dark:text-white font-bold md:text-[22px]">
          {followers}
        </p>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <p className="text-steelblue dark:text-white text-[11px] md:text-[13px]">
          Following
        </p>
        <p className="text-midnightblue dark:text-white font-bold md:text-[22px]">
          {following}
        </p>
      </div>
    </div>
  );
};

export default CodeInfo;
