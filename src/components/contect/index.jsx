import Baruunsum from "../../../public/Item/baruunsum";
import Zuunsum from "../../../public/Item/Zuunsum";
import Trending from "./trending/Trending";
import Headerpostlayout from "./o-post-layout";

export const Contect = () => {
  // const [articles, setArticles] = useState([]);
  // const [page, setPage] = useState();

  // const fetchData = () => {
  //   fetch(`https://dev.to/api/articles?=top=1${page}`)
  //     .then((response) => response.json())
  //     .then((data) => setArticles(data));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <main className="">
      <div className="flex flex-col w-full h-auto px-[352px] pt-[64px] gap-[100px]">
        <div className="flex flex-col max-h-[651px] w-full">
          <div className="h-[600px] w-full border rounded-xl"></div>
          <div className="max-h-auto w-full flex justify-end items-end">
            <button className="flex justify-center items-center min-w-[40px] min-h-[40px] rounded-md">
              <Zuunsum />
            </button>
            <button className="flex justify-center items-center min-w-[40px] min-h-[40px] rounded-md">
              <Baruunsum />
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
