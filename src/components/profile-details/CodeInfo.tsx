import React from "react";

interface IProps {
  repos: number;
  followers: number;
  following: number;
}

const CodeInfo: React.FC<IProps> = ({ repos, followers, following }) => {
  return (
    <div className="bg-lavender px-[14px] py-[18px] grid grid-cols-3 rounded-[10px]">
      <div className="flex flex-col gap-y-2 items-center">
        <p className="text-steelblue text-[11px] ">Repos</p>
        <p className="text-midnightblue font-bold">{repos}</p>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <p className="text-steelblue text-[11px]">Followers</p>
        <p className="text-midnightblue font-bold">{followers}</p>
      </div>
      <div className="flex flex-col gap-y-2 items-center">
        <p className="text-steelblue text-[11px]">Following</p>
        <p className="text-midnightblue font-bold">{following}</p>
      </div>
    </div>
  );
};

export default CodeInfo;
