const Card = ({ article }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        style={{
          backgroundImage: `url(${article.cover_image})`,
          width: "100%",
          height: "320px",
          borderRadius: "12px",
        }}
      >
        <div className=""></div>
      </div>
    </div>
  );
};
export default Card;
