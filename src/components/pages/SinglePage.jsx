import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/footer";
import SinglePost from "../singlepost";

const SinglePage = () => {
  const [article, setArticle] = useState({});
  const router = useRouter();
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, [article]);
  return (
    <div>
      <Header />
      <SinglePost article={article} />
      <Footer />
    </div>
  );
};
export default SinglePage;
