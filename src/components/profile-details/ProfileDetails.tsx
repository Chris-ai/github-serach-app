"use client";
import React, { useEffect } from "react";
import PrimaryDetails from "./PrimaryDetails";
import CodeInfo from "./CodeInfo";
import Links from "./Links";
import { useUserContext } from "@/app/context/userContext";
import Image from "next/image";
import { getGithubUsername } from "@/utils";
import { Skeleton } from "../Skeleton";

const ImagePlaceholder = "https://avatars.githubusercontent.com/u/583231?v=4";

const ProfileDetails: React.FC = () => {
  const { githubUser, isLoading } = useUserContext();

  return (
    <div className="px-6 md:px-12 pt-8 md:pt-[2.75rem] pb-12 bg-white dark:bg-deepblue rounded-[15px] flex flex-col gap-y-6 lg:flex-row lg:gap-x-9 shadow-normal dark:shadow-none">
      <>
        <div className="hidden lg:flex">
          <Skeleton
            isLoading={isLoading}
            className={"lg:w-[117px] lg:h-[117px] lg:rounded-full"}
          >
            <div
              className={
                "w-[117px] h-[117px] rounded-full flex items-center justify-center"
              }
            >
              <Image
                src={githubUser?.avatar_url ?? ImagePlaceholder}
                alt="avatar"
                height={120}
                width={120}
                className="rounded-full w-full aspect-auto"
              />
            </div>
          </Skeleton>
        </div>
        <div className="flex flex-col gap-y-6 w-full">
          <Skeleton isLoading={isLoading} className="p-6">
            <PrimaryDetails
              name={githubUser?.name ?? ""}
              username={getGithubUsername(githubUser?.login)}
              joinDate={githubUser?.created_at ?? ""}
              imgUrl={githubUser?.avatar_url ?? ImagePlaceholder}
            />
          </Skeleton>

          <Skeleton isLoading={isLoading} className="p-4">
            <p className="text-steelblue dark:text-white text-[13px] md:text-[15px]">
              {githubUser?.bio}
            </p>
          </Skeleton>

          <Skeleton isLoading={isLoading} className="p-10">
            <CodeInfo
              repos={githubUser?.public_repos ?? 0}
              followers={githubUser?.followers ?? 0}
              following={githubUser?.following ?? 0}
            />
          </Skeleton>
          <Skeleton isLoading={isLoading} className="p-9">
            <Links />
          </Skeleton>
        </div>
      </>
    </div>
  );
};

export default ProfileDetails;
