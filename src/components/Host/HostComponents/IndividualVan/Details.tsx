import { useOutletContext } from "react-router-dom";
import { van } from "../../../../Context.tsx/Context";

const Details = () => {
  const van = useOutletContext() as van;
  

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
