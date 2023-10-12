import { useContext, useEffect, useState } from "react";
import Van from "./van";
import { MyContext, van } from "../../Context.tsx/Context";
import { useSearchParams } from "react-router-dom";
const Vans = () => {
  const vans = useContext(MyContext);
  const [filterdVans, setFilterdVans] = useState<van[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  function Filter(type?: string) {
    if (type) {
      setFilterdVans(vans.filter((van) => van.type === type));
      setSearchParams({ type: `${type}` });
    } else {
      setFilterdVans([]);
      setSearchParams({});
    }
  }

  useEffect(() => {
    if (typeFilter) {
      console.log(typeFilter);

      setFilterdVans(vans.filter((van) => van.type === typeFilter));
    }
  }, [vans]);

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
          style={
            typeFilter==="simple" ? { backgroundColor: "#E17654", color: "white" } : {}
          }
          onClick={() => Filter("simple")}
          className="text-black hover:bg-[#E17654] hover:text-white bg-[#FFEAD0] rounded-[5px] w-[110px] h-[37px]"
        >
          Simple
        </button>
        <button
        style={
          typeFilter==="luxury" ? { backgroundColor: "#161616", color: "white" } : {}
        }
          onClick={() => Filter("luxury")}
          className="text-black hover:bg-[#161616] hover:text-white bg-[#FFEAD0] rounded-[5px] w-[110px] h-[37px]"
        >
          Luxury
        </button>
        <button
        style={
          typeFilter==="rugged" ? { backgroundColor: "#115E59", color: "white" } : {}
        }
          onClick={() => Filter("rugged")}
          className="text-black hover:bg-[#115E59] hover:text-white bg-[#FFEAD0] rounded-[5px] w-[110px] h-[37px]"
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            onClick={() => Filter()}
            className="text-[background: #4D4D4D] underline"
          >
            Clear filters
          </button>
        )}
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
                  searchParams={searchParams}
                  typeFilter={typeFilter}

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
                  searchParams={searchParams}
                  typeFilter={typeFilter}

                />
              );
            })}
      </div>
    </div>
  );
};

export default Vans;
