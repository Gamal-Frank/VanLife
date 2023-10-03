import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface card {
  id: string;
  name: string;
  type: string;
  price: number;
  imageUrl: string;
  filter: (type?: string) => void;
}
const Van = (props: card) => {
  const [bgColor, setBgColor] = useState({
    backgroundColor: "",
  });

  useEffect(() => {
    if (props.type === "simple") {
      setBgColor({ ...bgColor, backgroundColor: "#E17654" });
    } else if (props.type === "rugged") {
      setBgColor({ ...bgColor, backgroundColor: "#115E59" });
    } else {
      setBgColor({ ...bgColor, backgroundColor: "#161616" });
    }
  }, [props.type]);

  return (
    <div>
      <Link to={`/vans/${props.id}`}>
        <img
          src={props.imageUrl}
          className=" w-[230px] rounded-[5px] h-[230px]"
          alt=""
        />
        <div className="flex justify-between">
          <h2 className="text-black text-[20px] font-bold mt-2">
            {props.name}
          </h2>
          <div className="flex flex-col items-end mt-2">
            <h2 className="text-black text-[20px] font-bold">${props.price}</h2>
            <h3 className="text-[14px] font-normal">/day</h3>
          </div>
        </div>
      </Link>
      <button
        type="button"
        className="w-[86px] h-[34px] text-white text-center rounded-[5px] relative left-[5px] top-[-10px]"
        style={bgColor}
        onClick={() => props.filter(props.type)}
      >
        {props.type}
      </button>
    </div>
  );
};

export default Van;
