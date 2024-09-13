import { useEffect, useState } from "react";
import Headerpostlayout from "../contect/o-post-layout";
import { Footer } from "../footer/footer";
import { Header } from "../header/Header";

export const BlogListPage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=9&&top=${page}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  const handleClickLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <main className="">
        <div className="flex flex-col w-full h-auto px-[352px] pt-[64px] gap-[100px]">
          <div className="h-auto w-full flex justify-center items-start bg-black">
            <Headerpostlayout
              handleClickLoadMore={handleClickLoadMore}
              articles={articles}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
