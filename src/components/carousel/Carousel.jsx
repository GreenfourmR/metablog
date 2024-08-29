export const Carousel = () => {
  return (
    <main className="">
      <div className="container m-auto">
        <div className="px-20">
          <div className="flex w-full h-auto relative">
            <div className="h-[600px] w-full bg-image1 bg-cover bg-center rounded-[12px]">
              <div className="flex flex-end items-start border absolute bottom-0 left-0 py-10 px-10 bg-white rounded-[12px]">
                <div className="flex border py-10 px-10">
                  <p className="bg-[#4B6BFB]">Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
