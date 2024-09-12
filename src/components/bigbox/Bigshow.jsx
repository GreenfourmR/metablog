export const Bigshow = ({ articles }) => {
  return (
    <div className="flex flex-col w-full h-auto">
      <div
        style={{
          backgroundImage: `url(${articles?.cover_image})`,
          width: "100%",
          height: "100%",
          borderRadius: "12px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};
