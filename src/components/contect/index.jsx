import Trending from "./trending/Trending";
import Headerpostlayout from "./o-post-layout";
import { useState, useEffect } from "react";
import Chevronleft from "../../../public/Item/Chevronleft";
import Chevronright from "../../../public/Item/baruunsum";

export const Contect = () => {
  const [article, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === 0) {
        return article.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  };
  const handleRight = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === article.length - 1) {
        return 0;
      } else {
        return currentIndex + 1;
      }
    });
  };

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=30&top=7`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, [article]);
  return (
    <main className="">
      <div className="flex flex-col w-full h-auto px-[352px] pt-[64px] gap-[100px]">
        <div className="flex flex-col max-h-[651px] w-full ">
          <div
            className="flex flex-col lg:flex-col-reverse lg:justify-start justify-end min-h-[350px] lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[600px] w-auto rounded-xl bg-cover bg-center  bg-[#14162466] bg-blend-soft-light"
            style={{
              backgroundImage: `url(${article[currentIndex]?.cover_image})`,
            }}
          >
            <div className="flex w-[40%] relative bg-white left-5 bottom-4 rounded-md ">
              <div className="flex justify-center items-center rounded-md bg-blue-500 text-white p-2">
                {article[currentIndex]?.title}
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="max-h-auto w-full flex justify-end items-end">
            <button
              onClick={handleLeft}
              className="flex justify-center items-center min-w-[40px] min-h-[40px] rounded-md"
            >
              <Chevronleft />
            </button>
            <button
              onClick={handleRight}
              className="flex justify-center items-center min-w-[40px] min-h-[40px] rounded-md"
            >
              <Chevronright />
            </button>
          </div>
        </div>
        <div className="h-auto w-full flex justify-start items-start">
          <Trending />
        </div>
        <div className="h-auto w-full flex justify-center items-start">
          <Headerpostlayout />
        </div>
      </div>
    </main>
  );
};
