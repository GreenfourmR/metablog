import { Logo } from "../../../public/Item/Logo";
import { Search } from "../../../public/Item/search-outline";

export const Header = () => {
  return (
    <main className="">
      <div className="flex w-full m-auto px-[352px] pt-[64px]">
        <div className="flex justify-between items-center w-full">
          <Logo />
          <div className="flex justify-center items-center w-full h-auto gap-10">
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="flex justify-between items-center py-[8px] pr-[16px] pl-[8px] bg-[#F4F4F5] rounded-[5px] gap-3">
            <input
              type="text"
              placeholder="Search... "
              className="bg-[#F4F4F5]"
            />
            <Search />
          </div>
        </div>
      </div>
    </main>
  );
};
