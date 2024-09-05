import { Bardeg } from "../../../public/header.item/bardeg";

export const Carousel = () => {
  return (
    <main className="">
      <div className="container m-auto">
        <div className="px-20 py-8">
          <div className="flex w-full h-auto relative">
            <div className="h-[600px] w-full bg-image1 bg-cover bg-center rounded-[12px]">
              <div className="flex flex-col flex-end items-start absolute bottom-1 left-1 py-10 px-10 bg-white rounded-[12px] gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex">
                    <Bardeg text={"Technology"} />
                  </div>
                  <h1 className="font-sans text-[32px] font-semibold text-[#181A2A] leading-10">
                    Grid system for better Design User Interface
                  </h1>
                </div>
                <div className="flex text-[#97989F]">August 20, 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
