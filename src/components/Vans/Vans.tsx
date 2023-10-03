import { useContext, useState } from "react";
import Van from "./van";
import { MyContext, van } from "../../Context.tsx/Context";
const Vans = () => {
  const vans = useContext(MyContext);
  const [filterdVans, setFilterdVans] = useState<van[]>([]);
  function Filter(type?: string) {
    if (type) {
      setFilterdVans(vans.filter((van) => van.type === type));
    } else {
      setFilterdVans([]);
    }
  }

  return (
    <div
      className="w-full  bg-[#FFF7ED]"
      style={vans.length < 1 || filterdVans.length ? { height: "100vh" } : {}}
    >
      <h1 className=" ml-[26px] font-bold text-[32px] text-[#161616]">
        Explore our van options
      </h1>
      <div className="w-full flex justify-around mt-3">
        <button
          onClick={() => Filter("simple")}
          className="text-black bg-[#FFEAD0] rounded-[5px] w-[110px] h-[37px]"
        >
          Simple
        </button>
        <button
          onClick={() => Filter("luxury")}
          className="text-black bg-[#FFEAD0] rounded-[5px] w-[110px] h-[37px]"
        >
          Luxury
        </button>
        <button
          onClick={() => Filter("rugged")}
          className="text-black bg-[#FFEAD0] rounded-[5px] w-[110px] h-[37px]"
        >
          Rugged
        </button>
        <button
          onClick={() => Filter()}
          className="text-[background: #4D4D4D] underline"
        >
          Clear filters
        </button>
      </div>
      <div className="flex flex-wrap mb-5 ml-10 mt-10 gap-10">
        {filterdVans.length < 1
          ? vans.map((van, index) => {
              return (
                <Van
                  key={index}
                  id={van.id}
                  imageUrl={van.imageUrl}
                  price={van.price}
                  type={van.type}
                  name={van.name}
                  filter={Filter}
                />
              );
            })
          : filterdVans.map((van, index) => {
              return (
                <Van
                  key={index}
                  id={van.id}
                  imageUrl={van.imageUrl}
                  price={van.price}
                  type={van.type}
                  name={van.name}
                  filter={Filter}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Vans;
