import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex justify-center items-center bg-HomeBg bg-cover h-[100vh] w-full">
      <div className="w-[494.33px]">
        <h1 className=" w- text-white font-bold text-[36px]">
          You got the travel plans, we got the travel vans.
        </h1>
        <h2 className="text-white text-[16px] mt-7">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </h2>
        <button className="bg-[#FF8C38] mt-16 text-[16px] font-semibold text-white h-[50px] w-full rounded-md ">
          <Link to="/Vans">Find your van</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
