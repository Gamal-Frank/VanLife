import { useContext, useEffect, useState } from "react";
import { MyContext, van } from "../../../../Context.tsx/Context";
import { useParams } from "react-router-dom";
import { param } from "../../../Vans/VanDetails";

const Photos = () => {
  const vans = useContext(MyContext);
  const paramId = useParams();
  const [van, setVan] = useState<van>();
  useEffect(() => {
    for (const van of vans) {
      if (van.id === (paramId as unknown as param).id) {
        setVan(van);
      }
    }
  }, [vans]);

  return (
    <div>
      <img
        className="w-[160px] h-[158px] rounded-[5px] "
        src={van?.imageUrl}
        alt=""
      />
    </div>
  );
};

export default Photos;
