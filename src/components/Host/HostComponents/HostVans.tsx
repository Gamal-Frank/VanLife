import { Link } from "react-router-dom";
import { MyContext } from "../../../Context.tsx/Context";
import { useContext } from "react";

const HostVans = () => {
  const vans = useContext(MyContext);

  return (
    <div>
      <div className="text-[#161616] mt-5 flex justify-between px-10">
        <h1 className="font-bold text-[24px]">Your listed vans</h1>
        <button className="text-[16px]">View all</button>
      </div>
      <div className="flex flex-wrap">
        {vans.map((van, index) => {
          return (
            <Link to={`/Host/vans/${van.id}`}
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
      </div>{" "}
    </div>
  );
};

export default HostVans;
