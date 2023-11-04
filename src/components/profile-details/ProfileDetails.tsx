import PrimaryDetails from "./PrimaryDetails";
import CodeInfo from "./CodeInfo";
import Links from "./Links";

const ProfileDetails: React.FC = () => {
  return (
    <div className="px-6 md:px-12 pt-8 md:pt-[2.75rem] pb-12 bg-white rounded-[15px] flex flex-col gap-y-6 lg:flex-row lg:gap-x-9">
      <div className="hidden lg:flex">
        <div className="w-[117px] h-[117px] bg-red-100 rounded-full"></div>
      </div>
      <div className="flex flex-col gap-y-6">
        <PrimaryDetails
          name={"The Name"}
          username={"@username1"}
          joinDate={"02-11-2023"}
        />

        <p className="text-steelblue text-[13px] md:text-[15px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit officiis iste impedit fugiat unde maiores, corporis
          dignissimos doloremque exercitationem! Odit?{" "}
        </p>

        <CodeInfo repos={9} followers={4000} following={13} />
        <Links />
      </div>
    </div>
  );
};

export default ProfileDetails;
