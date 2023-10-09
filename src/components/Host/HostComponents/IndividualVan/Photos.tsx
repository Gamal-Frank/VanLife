import { van } from "../../../../Context.tsx/Context";
import { useOutletContext } from "react-router-dom";

const Photos = () => {
  const van = useOutletContext() as van;


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
