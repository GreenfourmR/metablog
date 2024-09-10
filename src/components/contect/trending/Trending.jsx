import { useEffect, useState } from "react";
import Card from "../../../../public/card/Card";
import Link from "next/link";

const Trending = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=4&&top=1`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col w-full gap-[30px]">
      <div className="w-full max-h-[28px]">Trending</div>
      <div className="w-full grid grid-cols-4 justify-center items-center gap-[20px]">
        {articles.map((article) => {
          return (
            <Link href={`/blog-us/${article.id}`}>
              <Card article={article} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Trending;
