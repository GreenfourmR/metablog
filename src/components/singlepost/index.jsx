const SinglePost = ({ article }) => {
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
    <div className="container m-auto">
      <div className="flex flex-col justify-center items-center px-[80px]">
        <div className="flex flex-col justify-center items-center gap-[32px] max-w-[802px] w-full">
          <div className="flex flex-col h-auto justify-center items-start gap-[24px]">
            <div className="text-[36px]">{article.title}</div>
            <div className="flex justify-center items-center gap-6 border">
              <div>fdgdr</div>
              <p className=" text-[#97989F]">
                {publishedDate.getFullYear()}-
                {generatMonth(publishedDate.getMonth())}-
                {publishedDate.getDay()}
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${article.cover_image})`,
              width: "100%",
              height: "462px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
            }}
          ></div>
          <div className="flex flex-col max-w-[802px] h-auto gap-[32px]">
            <div className="flex flex-col justify-between items-center h-[320px] text-[20px] ">
              <p>
                Traveling is an enriching experience that opens up new horizons,
                exposes us to different cultures, and creates memories that last
                a lifetime. However, traveling can also be stressful and
                overwhelming, especially if you don't plan and prepare
                adequately. In this blog article, we'll explore tips and tricks
                for a memorable journey and how to make the most of your
                travels.
              </p>
              <p>
                One of the most rewarding aspects of traveling is immersing
                yourself in the local culture and customs. This includes trying
                local cuisine, attending cultural events and festivals, and
                interacting with locals. Learning a few phrases in the local
                language can also go a long way in making connections and
                showing respect.
              </p>
            </div>
            <div className="">
              <div className="flex flex-col gap-[16px] text-[20px]">
                <h1>Research Your Destination</h1>
                <div className="flex flex-col justify-between h-[320px]">
                  <p>
                    Before embarking on your journey, take the time to research
                    your destination. This includes understanding the local
                    culture, customs, and laws, as well as identifying top
                    attractions, restaurants, and accommodations. Doing so will
                    help you navigate your destination with confidence and avoid
                    any cultural faux pas.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. In hendrerit gravida rutrum quisque non tellus orci
                    ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper
                    sit amet. Aenean euismod elementum nisi quis eleifend quam
                    adipiscing vitae. Viverra adipiscing at in tellus.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] text-[20px]">
              <div>Plan Your Itinerary</div>
              <div className=" flex flex-col h-[288px] justify-between">
                <p>
                  While it's essential to leave room for spontaneity and
                  unexpected adventures, having a rough itinerary can help you
                  make the most of your time and budget. Identify the must-see
                  sights and experiences and prioritize them according to your
                  interests and preferences. This will help you avoid
                  overscheduling and ensure that you have time to relax and
                  enjoy your journey.
                </p>
                <p>
                  Vitae sapien pellentesque habitant morbi tristique. Luctus
                  venenatis lectus magna fringilla. Nec ullamcorper sit amet
                  risus nullam eget felis. Tincidunt arcu non sodales neque
                  sodales ut etiam sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SinglePost;
