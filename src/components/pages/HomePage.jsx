import { useEffect, useState } from "react";
import { Contect } from "../contect";
import { Footer } from "../footer/footer";
import { Header } from "../header/Header";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState();
  const fetchData = () => {
    fetch(`https://dev.to/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  // const handleClickLoadMore = () => {
  //   setPage(page + 1);
  // };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(articles, "ajillah");

  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <Contect articles={articles} />
      <Footer />
    </div>
  );
};
