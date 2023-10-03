import { Link } from "react-router-dom";
interface props{
  id:string | undefined
}
const IndNav = (props:props) => {
  return (
    <div className="flex w-full justify-start pl-16 gap-10">
      <Link className=" hover:underline font-bold" to={`/Host/vans/${props.id}/`}>
        Detials
      </Link>
      <Link className=" hover:underline font-bold" to={`/Host/vans/${props.id}/pricing`}>
        Pricing
      </Link>
      <Link className=" hover:underline font-bold"  to={`/Host/vans/${props.id}/photos`}>
        Photos
      </Link>
    </div>
  );
};

export default IndNav;
