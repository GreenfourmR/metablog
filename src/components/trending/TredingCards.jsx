import { Bardeg } from "../../../public/header.item/bardeg";

export default function Home() {
  const trendingcards = [
    {
      name: "Technology",
      pro: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      name: "Technology",
      pro: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      name: "Technology",
      pro: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      name: "Technology",
      pro: "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];
  return (
    <div className="flex w-full h-auto gap-5 text-white">
      {trendingcards.map((element) => {
        return (
          <div className="flex flex-col bg-image1 justify-end pb-8 min-w-[294px] min-h-[320px] bg-cover bg-center rounded-[12px]">
            <div className="flex flex-col border gap-4 px-10">
              <Bardeg />
              <div className="flex justify-center items-center text-[18px] font-semibold">
                {element.pro}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
