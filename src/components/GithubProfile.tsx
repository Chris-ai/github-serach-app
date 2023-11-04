import React from "react";
import LogoSection from "./LogoSection";
import Searchbar from "./Searchbar";
import ProfileDetails from "./profile-details/ProfileDetails";

const GithubProfile: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4 sm:gap-y-6 md:max-w-[573px] lg:max-w-[730px]">
      <LogoSection />
      <Searchbar />
      <ProfileDetails />
    </div>
  );
};

export default GithubProfile;
