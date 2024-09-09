import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/Header";
import Text from "../../../public/technology/text";

const Error = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <div className="flex justify-center items-center border ">
        <div className="flex justify-center items-center max-h-[208px] max-w-[642px] gap-10 ">
          <div className="flex text-[72px]">404</div>
          <div className="w-[1px] h-[156px] bg-[#E8E8EA]"></div>
          <div className="flex flex-col gap-5 justify-start items-start">
            <div className="text-[24px]">Page Not Found</div>
            <div className="text-[18px] text-[#696A75]">
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </div>
            <Text text={"Back To Home"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Error;
