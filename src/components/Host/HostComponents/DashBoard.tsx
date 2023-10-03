import { useContext } from "react";
import { MyContext } from "../../../Context.tsx/Context";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const vans = useContext(MyContext);

  return (
    <div className="">
      <div className=" mt-7 px-10 justify-between w-full bg-[#FFEAD0] h-[220px] flex">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold mt-8 text-[36px]">Welcome!</h1>
          <h3 className="text-[16px] text-[#4D4D4D] font-medium">
            Income last <h4 className="inline font-bold underline ">30 days</h4>
          </h3>

          <h2 className="text-[48px] font-bold">$2,260</h2>
        </div>
        <button className=" mt-24 text-[16px] font-medium text-[#161616] h-[22px]">
          Details
        </button>
      </div>
      <div className="bg-[#FFDDB2] justify-between px-10 items-center flex  w-full h-[113px]">
        <h1 className="text-24px font-bold">
          Review score{" "}
          <img
            className="inline ml-3 mb-[3px] h-[14px] w-[16px]"
            src="/Star 3.png"
            alt=""
          />
          <h2 className="inline text-[#4D4D4D] font-medium">
            <h3 className="inline text-black font-bold">5.0</h3>/5
          </h2>
        </h1>

        <button className="text-[16px] font-medium text-[#161616] h-[22px]">
          Details
        </button>
      </div>
      <div>
        <div className="text-[#161616] mt-5 flex justify-between px-10">
          <h1 className="font-bold text-[24px]">Your listed vans</h1>
          <button className="text-[16px]">View all</button>
        </div>
        <div className="flex flex-wrap">
          {vans.map((van, index) => {
            return (
              <Link
                to={`/Host/vans/${van.id}`}
                className=" flex justify-between items-center ml-14 my-3 w-[495px] h-[102px] rounded-[6px] bg-[#FFFFFF]"
                key={index}
              >
                <div className="ml-5 flex">
                  <img
                    className="w-[65px] h-[65px] mx-4 rounded-[5px]"
                    src={van.imageUrl}
                    alt=""
                  />
                  <div>
                    <h1 className="font-bold text-[20px]">{van.name}</h1>
                    <h2 className="text-[#4D4D4D] text-[16px] font-medium">
                      ${van.price}/day
                    </h2>
                  </div>
                </div>
                <button className="mr-5">Edit</button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
