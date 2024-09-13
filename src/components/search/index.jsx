import Link from "next/link";

export const SearchDropDwon = ({ filteredArticles, searchValue }) => {
  filteredArticles.length = 5;
  return (
    <div
      className={`${
        searchValue ? "h-[200px] border" : "h-0"
      } flex flex-col transition-all duration-200 overflow-hidden rounded-md absolute w-full right-0`}
    >
      {filteredArticles?.map((article) => {
        return (
          <Link href={`blog-us/${article?.id}`}>
            <div className="h-full p-2 border-b-2 text-nowrap hover:bg-slate-200">
              {article?.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
