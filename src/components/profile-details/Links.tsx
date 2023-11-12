"use client";
import React from "react";
import Image from "next/image";
import LocationIcon from "@/assets/icon-location.svg";
import WebsiteIcon from "@/assets/icon-website.svg";
import TwitterIcon from "@/assets/icon-twitter.svg";
import CompanyIcon from "@/assets/icon-company.svg";
import Link from "next/link";
import { useUserContext } from "@/app/context/userContext";
import { getGithubUsername } from "@/utils";
import classNames from "classnames";

interface CustomLinkProps {
  href: string;
  name?: string | null;
  imgProps: ImgProps;
  className?: string;
}
interface ImgProps {
  width: number;
  height: number;
  src: any;
  alt: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  name,
  imgProps,
  className = "w-5",
}) => {
  const isActive = !!name;

  return (
    <div
      className={classNames(
        "flex gap-x-[13px] ",
        `${!isActive && "opacity-30"}`
      )}
    >
      <div className={"w-5 h-5 grid place-items-center"}>
        <Image
          src={imgProps.src}
          alt={imgProps.alt}
          height={imgProps.height}
          width={imgProps.width}
          className={classNames("h-5", className)}
        />
      </div>
      <Link
        className={classNames(
          "text-steelblue dark:text-white text-[13px] md:text-[15px] break-all",
          `${isActive ? "hover:underline" : "cursor-default"}`
        )}
        href={href}
      >
        {isActive ? name : "Not Available"}
      </Link>
    </div>
  );
};

const Links: React.FC = () => {
  const { githubUser } = useUserContext();

  return (
    <div className="flex flex-col gap-4 md:gap-8 lg:gap-16 md:grid md:grid-cols-2">
      <div className="flex flex-col gap-y-4">
        <CustomLink
          href={`https://www.google.pl/maps/place/${
            githubUser?.location ?? ""
          }`}
          name={githubUser?.location ?? ""}
          imgProps={{
            height: 20,
            width: 13,
            alt: "blog-icon",
            src: LocationIcon,
          }}
          className="w-4"
        />
        <CustomLink
          href={githubUser?.blog ?? ""}
          name={githubUser?.blog ?? ""}
          imgProps={{
            height: 20,
            width: 20,
            alt: "blog-icon",
            src: WebsiteIcon,
          }}
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <CustomLink
          href={`https://twitter.com/${githubUser?.twitter_username ?? ""}`}
          name={githubUser?.twitter_username ?? ""}
          imgProps={{
            height: 20,
            width: 20,
            alt: "twitter-icon",
            src: TwitterIcon,
          }}
        />
        <CustomLink
          href={githubUser?.html_url ?? ""}
          name={getGithubUsername(githubUser?.login)}
          imgProps={{
            height: 20,
            width: 20,
            alt: "gh-icon",
            src: CompanyIcon,
          }}
        />
      </div>
    </div>
  );
};

export default Links;
