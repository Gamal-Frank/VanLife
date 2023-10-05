import { Link } from "react-router-dom";
interface props{
  id:string | undefined
}
const IndNav = (props:props) => {
  return (
    <div className="flex w-full justify-start  my-5 gap-10">
      <Link className=" hover:underline font-bold" to={`/Host/vans/${props.id}/`}>
        Details
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
