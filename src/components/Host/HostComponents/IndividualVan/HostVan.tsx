import { Link, Outlet, useParams } from "react-router-dom";
import { MyContext, van } from "../../../../Context.tsx/Context";
import { useContext, useState, useEffect } from "react";
import { param } from "../../../Vans/VanDetails";
import IndNav from "./IndNav";

const HostVan = () => {
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
    <div>
      <Link
        className=" flex my-10 items-center gap-2 justify-center w-[142px] h-[23px]"
        to={`/Host/vans`}
      >
        <img className="h-[10px]" src="/Arrow 1.png" alt="" />
        <h3 className=" inline text-[16px] font-medium hover:underline">
          Back to all vans
        </h3>
      </Link>
      <div className="w-[496px] flex-col flex justify-start p-5  m-10 h-[500px] rounded-[6px] bg-[#FFFFFF]">
        <div className="flex flex-row gap-10">
          <img
            className="w-[160px] h-[158px] rounded-[5px] "
            src={van?.imageUrl}
            alt=""
          />
          <div className="flex flex-col gap-1 mt-8">
            <div
              className="w-[86px] h-[34px] text-white flex justify-center items-center rounded-[5px]"
              style={bgColor}
            >
              {van?.type}
            </div>
            <h1 className="font-bold text-[26px]">{van?.name}</h1>
            <h2 className="text-black text-[20px] font-bold">
              ${van?.price}
              <h3 className="text-[14px] inline font-semibold">/day</h3>
            </h2>
          </div>
        </div>
        <div className="">
          <IndNav id={van?.id} />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default HostVan;
