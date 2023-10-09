import { van } from "../../../../Context.tsx/Context";
import { useOutletContext } from "react-router-dom";

const Pricing = () => {
  const van = useOutletContext() as van;

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
