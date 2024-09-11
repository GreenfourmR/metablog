import { useEffect, useState } from "react";
import Cards from "../../card/cards";

const Headerpostlayout = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=9&&top=2`)
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
          <div className="flex w-[35%] justify-between items-center">
            <button>All</button>
            <button>Design</button>
            <button>Travel</button>
            <button>Fashion</button>
            <button>Technology</button>
            <button>Branding</button>
          </div>
          <div className="flex w-[65%] justify-end items-center">
            <button>View All</button>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 grid-rows-3 justify-center items-center gap-[20px]">
          {articles.map((article) => {
            return <Cards article={article} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Headerpostlayout;
