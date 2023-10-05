import { useContext, useEffect, useState } from "react";
import { MyContext, van } from "../../../../Context.tsx/Context";
import { useParams } from "react-router-dom";
import { param } from "../../../Vans/VanDetails";

const Details = () => {
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
    <div className="flex flex-col gap-5">
      <h1 className="text-[15px] font-bold">
        Name: <h2 className=" inline font-semibold">{van?.name}</h2>
      </h1>
      <h1 className="text-[15px] font-bold">
        Category: <h2 className=" inline font-semibold">{van?.type}</h2>
      </h1>
      <h1 className="text-[15px] font-bold">
        Description:{" "}
        <h2 className=" inline font-semibold">{van?.description}</h2>
      </h1>
      <h1 className="text-[15px] font-bold">
        Visibility: <h2 className=" inline font-semibold">Public</h2>
      </h1>
    </div>
  );
};

export default Details;
