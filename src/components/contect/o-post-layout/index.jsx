import { useEffect, useState } from "react";
import Cards from "../../card/cards";
import Link from "next/link";

const Headerpostlayout = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=12&&top=10`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col w-full h-full gap-[32px]">
        <h1 className="">ALL BLOG POST</h1>
        <div className="flex w-full h-full gap-[30px]">
          <div className="flex w-[50%] justify-between items-center">
            <button className="flex justify-center items-center hover:bg-slate-300 rounded-lg p-2 w-[100px]">
              All
            </button>
            <button className="flex justify-center items-center hover:bg-slate-300 rounded-lg p-2 w-[100px]">
              Design
            </button>
            <button className="flex justify-center items-center hover:bg-slate-300 rounded-lg p-2 w-[100px]">
              Travel
            </button>
            <button className="flex justify-center items-center hover:bg-slate-300 rounded-lg p-2 w-[100px]">
              Fashion
            </button>
            <button className="flex justify-center items-center hover:bg-slate-300 rounded-lg p-2 w-[100px]">
              Technology
            </button>
            <button className="flex justify-center items-center hover:bg-slate-300 rounded-lg p-2 w-[100px]">
              Branding
            </button>
          </div>
          <div className="flex w-[65%] justify-end items-center">
            <Link href="/blog-us">
              <button>View All</button>
            </Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 grid-rows-3 justify-center items-center gap-[20px]">
          {articles.map((article) => {
            return (
              <Link href={`/blog-us/${article.id}`}>
                <Cards article={article} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Headerpostlayout;
