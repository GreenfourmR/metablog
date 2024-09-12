import { useState, useEffect } from "react";
import { Logo } from "../../../public/Item/Logo";
import { Search } from "../../../public/Item/search-outline";
import Link from "next/link";
import { SearchDropDwon } from "../search";

export const Header = () => {
  const [articlesForSearch, setArticlesForSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchsearchdata = async () => {
    try {
      const response = await fetch("https://dev.to/api/articles?per_page=100");
      const data = await response.json();
      setArticlesForSearch(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchsearchdata();
  }, []);

  const filteredArticles = articlesForSearch?.filter((article) =>
    article?.title?.toLowerCase().includes(searchValue)
  );

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <main className="">
      <div className="flex w-full m-auto justify-center items-center px-[352px] pt-[64px]">
        <div className="flex justify-between items-center w-full">
          <div className="flex w-full">
            <Link href="/home">
              <Logo />
            </Link>
          </div>
          <div className="flex justify-start items-center w-full h-auto gap-10 ">
            <Link href="/home">
              <p className="flex justify-center items-center hover:bg-slate-300 rounded-lg p-2 w-[100px]">
                Home
              </p>
            </Link>
            <Link href="/blog-us">
              <p className="flex justify-center items-center hover:bg-slate-300 rounded-lg p-2 w-[100px]">
                Blog
              </p>
            </Link>

            <Link href="/contact-us">
              <p className="flex justify-center items-center hover:bg-slate-300 rounded-lg p-2 w-[100px] ">
                Contact
              </p>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-end relative">
            <div className="flex justify-between items-center py-[8px] pr-[16px] pl-[8px] bg-[#F4F4F5] rounded-[5px] gap-3">
              <input
                onChange={handleInputChange}
                type="text"
                placeholder="Search... "
                className="bg-[#F4F4F5] outline-none"
              />
              <Search />
            </div>
            <div>
              <SearchDropDwon
                searchValue={searchValue}
                filteredArticles={filteredArticles}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
