const Cards = ({ article }) => {
  const publishedDate = new Date(article.published_at);
  const generatMonth = (month) => {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className="gap-4 flex-col flex w-full h-full border border-[#E8E8EA] rounded-xl py-4 px-4 ">
        <div className="flex flex-col rounded-md h-full gap-3">
          <div className="flex flex-col gap-4">
            <div
              style={{
                backgroundImage: `url(${article.cover_image})`,
                width: "100%",
                height: "240px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "6px",
              }}
            ></div>
            <div className="flex text-[#4B6BFB]">{article.tag_list[0]}</div>
            <div className="overflow-hidden h-[100px]">
              <p className="text-2xl font-semibold text-ellipsis ">
                {article.description}
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-3">
              <div
                className="flex rounded-[50px] w-2 h-2"
                style={{
                  backgroundImage: `url(${article.user.profile_image})`,
                  width: "30px",
                  height: "30px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                }}
              ></div>
              <div>{article?.user.name}</div>
            </div>
            <p className=" text-[#97989F]">
              {publishedDate.getFullYear()}-
              {generatMonth(publishedDate.getMonth())}-{publishedDate.getDay()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
