const trans = [
  {
    cash: 750,
    date: "1/12/22",
  },
  {
    cash: 560,
    date: "10/11/22",
  },
  {
    cash: 980,
    date: "23/11/22",
  },
];
const Income = () => {
  return (
    <div className="flex flex-col mx-16 mt-9 gap-7">
      <h1 className="text-[36px] font-bold">Income</h1>
      <h3 className="text-[16px] text-[#4D4D4D] font-medium">
        last <h4 className="inline font-bold underline ">30 days</h4>
      </h3>
      <h2 className="text-[48px] font-bold">$2,260</h2>

      <img className="h-[450px] w-[493px]" src="/public/Group 312.png" alt="" />

      <div>
        <div className="flex justify-between items-end">
          <h1 className="text-[24px] font-bold">
            Your transactions({trans.length})
          </h1>
          <h3 className="text-[16px] text-[#4D4D4D] font-medium">
            last <h4 className="inline font-bold underline ">30 days</h4>
          </h3>
        </div>
        <div className=" my-7">
          {trans.map((tran, index) => {
            return (
              <div
                className=" flex justify-between  items-center ml-4 my-7 w-[495px] h-[102px] rounded-[6px] bg-[#FFFFFF]"
                key={index}
              >
                <div className="ml-5">
                  <h1 className="text-[36px] font-semibold">${tran.cash}</h1>
                </div>
                <h2 className="text-[#4D4D4D] text-[16px] font-medium mx-5">
                  {tran.date}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Income;
