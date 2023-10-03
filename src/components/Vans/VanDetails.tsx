import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext, van } from "../../Context.tsx/Context";

export interface param {
  id: string;
}
const VanDetails = () => {
  const paramId = useParams();
  const vans = useContext(MyContext);
  const [van, setVan] = useState<van>();
  const [bgColor, setBgColor] = useState({
    backgroundColor: "",
  });

  useEffect(() => {
    for (const van of vans) {
      if (van.id === (paramId as unknown as param).id) {
        setVan(van);
      }
    }
  }, [vans]);

  useEffect(() => {
    if (van?.type === "simple") {
      setBgColor({ ...bgColor, backgroundColor: "#E17654" });
    } else if (van?.type === "rugged") {
      setBgColor({ ...bgColor, backgroundColor: "#115E59" });
    } else {
      setBgColor({ ...bgColor, backgroundColor: "#161616" });
    }
  }, [van?.type]);

  return (
    <div
      style={vans ? {} : { height: "100vh" }}
      className="flex items-start flex-col px-5 my-5 gap-4"
    >
      <Link
        className=" flex items-center gap-2 justify-center w-[142px] h-[23px]"
        to={`/vans`}
      >
        <img className="h-[10px]" src="/Arrow 1.png" alt="" />
        <h3 className=" inline text-[16px] font-medium hover:underline">
          {" "}
          Back to all vans{" "}
        </h3>
      </Link>
      <img
        className="w-[498px] h-[490px]"
        src={van?.imageUrl}
        alt={van?.name}
      />
      <div
        className="w-[86px] h-[34px] text-white flex justify-center items-center rounded-[5px]"
        style={bgColor}
      >
        {van?.type}
      </div>
      <h1 className="text-[32px] text-black font-bold">{van?.name}</h1>
      <h2 className="text-black text-[20px] font-bold">
        ${van?.price}
        <h3 className="text-[14px] inline font-semibold">/day</h3>
      </h2>

      <p className="text-[16px] font-medium">{van?.description}</p>
      <button className=" w-[495px] h-[50px] mb-20 text-white flex justify-center items-center rounded-[5px] bg-[#FF8C38]">
        Rent this van
      </button>
    </div>
  );
};

export default VanDetails;
