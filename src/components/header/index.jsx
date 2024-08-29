import { Logo } from "../../../public/header.item/Logo";
import { Searchitem } from "../../../public/header.item/search-outline";

export const Header = () => {
  return (
    <main className="">
      <div className="container m-auto">
        <div className="py-8 px-20">
          <div className="flex justify-center items-center">
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
              <Searchitem />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
