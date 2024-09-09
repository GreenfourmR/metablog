import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/Header";
import SinglePage from "@/components/pages/SinglePage";

export default function Home() {
  return (
    <div className=" flex flex-col gap-[100px]">
      <Header />
      <SinglePage />;
      <Footer />
    </div>
  );
}
