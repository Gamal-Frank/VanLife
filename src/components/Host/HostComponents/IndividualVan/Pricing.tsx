import { useContext, useEffect, useState } from "react";
import { MyContext, van } from "../../../../Context.tsx/Context";
import { useParams } from "react-router-dom";
import { param } from "../../../Vans/VanDetails";

const Pricing = () => {
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
      <h2 className="text-black text-[24px] font-bold">
        ${van?.price}
        <h3 className="text-[16px] inline font-semibold">/day</h3>
      </h2>
    </div>
  );
};

export default Pricing;
