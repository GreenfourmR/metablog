import Tech from "../carousel/tech";

const Card = ({ article }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div
        className="flex justify-end items-end p-5 "
        style={{
          backgroundImage: `url(${article.cover_image})`,
          width: "100%",
          height: "320px",
          borderRadius: "12px",
        }}
      >
        <div className="flex flex-col justify-end bg-[#14162464] bg-blend-soft-light rounded-xl">
          <Tech text={article.tag_list[2]} />
          <p className="line-clamp-2 text-white text-[18px] ">
            {article.title}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
