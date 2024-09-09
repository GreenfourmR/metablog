import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SinglePage = () => {
  const [articles, setArticles] = useState({});
  const router = useRouter();
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div></div>;
};
export default SinglePage;
