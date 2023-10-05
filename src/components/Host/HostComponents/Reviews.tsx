const rev = [
  {
    name: "Elliot",
    date: "December 1,2022",
    text: "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    stars: 5,
  },
  {
    name: "Sandy",
    date: "November 23,2022",
    text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    stars: 5,
  },
];
const Reviews = () => {
  return (
    <div className="flex flex-col mx-16 mt-9 gap-7">
      <div className="">
        <h1 className="text-[36px] inline font-bold">Your reviews</h1>
        <h3 className="text-[16px] ml-6 inline text-[#4D4D4D] font-medium">
          last <h4 className="inline font-bold underline ">30 days</h4>
        </h3>
      </div>
      <img className="w-[497px] h-[215px]" src="/Group 314.png" alt="" />
      <div>
        <h1 className="text-[18px] mb-7 font-bold">Reviews({rev.length})</h1>
        <div>
          {rev.map((rev, index) => {
            return (
              <div key={index}>
                <div className="flex mb-5">
                  {[...Array(rev.stars)].map((index) => {
                    return <img key={index} src="/Star 4.png" alt="" />;
                  })}
                </div>
                <div className="mb-5">
                    <h2 className="text-[16px] font-semibold inline mr-2 text-[#161616]">{rev.name}</h2>
                    <h2 className="text-[16px] font-semibold inline text-[#8C8C8C]">{rev.date}</h2>
                    <h3 className="text-[16px] mb-5 font-medium">{rev.text}</h3>
                    <hr className="border bottom-1 border-[#C7C7C7]"/>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
