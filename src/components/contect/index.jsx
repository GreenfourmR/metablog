import Trending from "./trending/Trending";
import Headerpostlayout from "./o-post-layout";
import { useState, useEffect } from "react";
import Chevronleft from "../../../public/Item/Chevronleft";
import Chevronright from "../../../public/Item/baruunsum";
import Link from "next/link";

export const Contect = () => {
  const [article, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [handleClickMore, setHandleClickMore] = useState();

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
  const handleClickLoadMore = () => {
    setHandleClickMore((handleClickMore) => {
      setHandleClickMore(handleClickMore + 3);
    });
  };

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=30&top=7`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, [article, handleClickLoadMore]);
  return (
    <main className="">
      <div className="flex flex-col w-full h-auto px-[352px] pt-[64px] gap-[100px]">
        <div className="flex flex-col max-h-[651px] w-full ">
          <Link href={`/blog-us/${article[currentIndex]?.id}`}>
            <div
              className="flex flex-col lg:flex-col-reverse lg:justify-start justify-end min-h-[350px] lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[600px] w-auto rounded-xl bg-cover bg-center  bg-[#14162466] bg-blend-soft-light"
              style={{
                backgroundImage: `url(${article[currentIndex]?.cover_image})`,
              }}
            >
              <div className="flex w-[40%] flex-col relative items-start justify-between bg-white left-5 bottom-4 rounded-md p-6 ">
                <div className="flex justify-center items-center w-[100px] rounded-md bg-blue-500 text-white ">
                  {article[currentIndex]?.type_of}
                </div>
                <div className="flex justify-start items-center text-[36px]">
                  {article[currentIndex]?.title}
                </div>
                <div className="flex justify-start items-center">
                  {article[currentIndex]?.last_comment_at}
                </div>
              </div>
            </div>
          </Link>
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
        <div className="h-auto w-full flex justify-center items-center flex-col gap-10">
          <Headerpostlayout />
          <button
            className="flex justify-center items-center text-[36px] rounded-xl hover:bg-slate-200 p-4"
            onClick={handleClickLoadMore}
          >
            More
          </button>
        </div>
      </div>
    </main>
  );
};
