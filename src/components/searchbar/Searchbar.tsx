import SearchIcon from "@/assets/icon-search.svg";
import Image from "next/image";
import Button from "./Button";
import Input from "./Input";

const Searchbar = () => {
  return (
    <div className="flex bg-white dark:bg-deepblue rounded-[15px] gap-x-2 pl-4 md:pl-8 pr-2 py-2 items-center shadow-normal dark:shadow-none">
      <Image
        src={SearchIcon}
        alt="icon-search"
        height={20}
        width={20}
        className="w-5 h-5"
      />
      <Input />
      <Button>Search</Button>
    </div>
  );
};

export default Searchbar;
