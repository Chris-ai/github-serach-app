import PrimaryDetails from "./PrimaryDetails";
import CodeInfo from "./CodeInfo";
import Links from "./Links";

const ProfileDetails: React.FC = () => {
  return (
    <div className="px-6 pt-8 pb-12 bg-white rounded-[15px] flex flex-col gap-y-6">
      <PrimaryDetails
        name={"The Name"}
        username={"@username1"}
        joinDate={"02-11-2023"}
      />

      <p className="text-steelblue text-[13px]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        officiis iste impedit fugiat unde maiores, corporis dignissimos
        doloremque exercitationem! Odit?{" "}
      </p>

      <CodeInfo repos={9} followers={4000} following={13} />
      <Links />
    </div>
  );
};

export default ProfileDetails;
