import { TrendingCard1 } from "../../../public/header.item/trendingcard1";
import Home from "./TredingCards";

export const Trendingcard = () => {
  return (
    <main className="">
      <div className="container m-auto">
        <div className="px-20 py-8">
          <div className="flex flex-col border">
            <div className="flex flex-col justify-center items-start gap-[10px]">
              <h1 className="text-[24px] font-sans font-bold leading-7 text-left">
                Trending
              </h1>
              <div className="flex justify-between gap-[16px]">
                <TrendingCard1 />
                <TrendingCard1 />
                <TrendingCard1 />
                <TrendingCard1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
//styleName: Heading/h3/Bold;
// font-family: Work Sans;
// font-size: 24px;
// font-weight: 700;
// line-height: 28px;
// text-align: left;
