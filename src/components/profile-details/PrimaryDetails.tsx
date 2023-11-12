import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

interface IProps {
  name: string;
  username: string;
  joinDate: string;
  imgUrl: string;
}

const PrimaryDetails: React.FC<IProps> = ({
  name,
  username,
  joinDate,
  imgUrl,
}) => {
  return (
    <div className="flex gap-x-[20px] mb-3">
      <div className="w-[70px] h-[70px] md:w-[117px] md:h-[117px] rounded-full lg:hidden flex justify-center items-center">
        <Image
          src={imgUrl}
          alt="avatar"
          height={120}
          width={120}
          className="rounded-full lg:hidden w-full aspect-auto"
        />
      </div>
      <div className="flex flex-col lg:w-full gap-y-1.5 justify-center lg:flex-row lg:justify-between">
        <div className="flex flex-col flex-1 mr-1">
          <h3 className="font-bold text-midnightblue dark:text-white md:text-[26px] break-words">
            {name}
          </h3>
          <p className="text-azure text-[13px] md:text-base">{username}</p>
        </div>
        <p className="text-bluegray dark:text-white text-[13px] md:text-base">
          Joined {dayjs(joinDate).format("DD MMM YYYY")}
        </p>
      </div>
    </div>
  );
};

export default PrimaryDetails;
