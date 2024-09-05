import Facebook from "../../../public/Item/facebook";
import In from "../../../public/Item/in";
import Instagram from "../../../public/Item/Instagrem";
import LogoM from "../../../public/Item/LogoM";
import Twitter from "../../../public/Item/twitter";

export const Footer = () => {
  return (
    <div className="w-full h-auto m-auto px-[352px] pt-[64px] gap-[25px] bg-[#F6F6F7]">
      <div className="flex justify-between gap-5">
        <div className="flex flex-col max-w-[289px] h-auto gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <h1 className="text-[18px] font-semibold">About</h1>
            <div className="font-workSans font-normal max-w-[280px] h-auto text-base text-[#696A75] not-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </div>
          <div className="font-workSans font-normal text-base not-italic gap-[4px]">
            <div className="">Email : info@jstemplate.net</div>
            <div className="">Phone : 880 123 456 789</div>
          </div>
        </div>
        <div className="flex">
          <div className="w-auto max-h-[88px] flex flex-col gap-2">
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <div className="flex gap-[27px]">
            <Facebook />
            <Twitter />
            <Instagram />
            <In />
          </div>
        </div>
      </div>
      <div className="w-full h-auto border"></div>
      <div className="flex h-auto w-full py-[32px] gap-[64px]">
        <div className="flex w-full gap-[10px]">
          <LogoM />
          <div>
            <p>MetaBlog</p>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex w-full h-auto justify-end items-center ">
          <div className="flex items-end gap-[16px]">
            <p className="">Terms of Use</p>
            <p className="border bg-[#E8E8EA]"></p>
            <p>Privacy Policy</p>
            <p className=" border bg-[#E8E8EA]"></p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
