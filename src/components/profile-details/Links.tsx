import React from "react";
import Image from "next/image";
import LocationIcon from "@/assets/icon-location.svg";
import WebsiteIcon from "@/assets/icon-website.svg";
import TwitterIcon from "@/assets/icon-twitter.svg";
import CompanyIcon from "@/assets/icon-company.svg";

const Links: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-[13px]">
          <div className="w-5 h-5 grid place-items-center">
            <Image
              src={LocationIcon}
              alt="location-icon"
              height={20}
              width={13}
              className="w-4 h-5"
            />
          </div>

          <p className="text-steelblue text-[13px] md:text-[15px]">
            San Francisco
          </p>
        </div>
        <div className="flex gap-x-[13px]">
          <Image
            src={WebsiteIcon}
            alt="location-icon"
            height={20}
            width={20}
            className="w-5 h-5"
          />
          <p className="text-steelblue text-[13px] md:text-[15px]">
            https://github.blog
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-[13px]">
          <Image
            src={TwitterIcon}
            alt="location-icon"
            height={20}
            width={20}
            className="w-5 h-5"
          />
          <p className="text-steelblue text-[13px] md:text-[15px]">
            Not Available
          </p>
        </div>
        <div className="flex gap-x-[13px]">
          <Image
            src={CompanyIcon}
            alt="location-icon"
            height={20}
            width={20}
            className="w-5 h-5"
          />
          <p className="text-steelblue text-[13px md:text-[15px]]">@github</p>
        </div>
      </div>
    </div>
  );
};

export default Links;
