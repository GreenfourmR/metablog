export const Bigshow = ({ articles }) => {
  return (
    <div className="flex flex-col">
      <div
        style={{
          backgroundImage: `url(${articles?.cover_image})`,
          width: "100%",
          height: "320px",
          borderRadius: "12px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};
