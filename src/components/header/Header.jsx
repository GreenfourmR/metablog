import { useState, useEffect } from "react";
import { Logo } from "../../../public/Item/Logo";
import { Search } from "../../../public/Item/search-outline";
import Link from "next/link";

export const Header = () => {
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const fetch = () => {
    fetch(`https://dev.to/api/articles`)
      .then((response) => response.json)
      .then((data) => setArticles(data));
  };
  const handleInputChange = (e) => {
    const searchString = e.target.value;
    setSearchValue(searchString.trim().toLowerCase());
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <main className="">
      <div className="flex w-full m-auto px-[352px] pt-[64px]">
        <div className="flex justify-between items-center w-full">
          <Link href="/home">
            <Logo />
          </Link>
          <div className="flex justify-center items-center w-full h-auto gap-10">
            <Link href="/home">
              <p>Home</p>
            </Link>
            <Link href="/blog-us">
              <p>Blog</p>
            </Link>

            <Link href="/contact-us">
              <p>Contact</p>
            </Link>
          </div>
          <div className="flex justify-between items-center py-[8px] pr-[16px] pl-[8px] bg-[#F4F4F5] rounded-[5px] gap-3">
            <input
              type="text"
              placeholder="Search... "
              className="bg-[#F4F4F5] outline-none"
            />
            <Search />
          </div>
        </div>
      </div>
    </main>
  );
};
