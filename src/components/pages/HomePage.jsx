import { Carousel } from "../carousel/Carousel";
import { Header } from "../header";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <Header />
      <Carousel />
    </div>
  );
};
