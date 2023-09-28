import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="w-full h-[233px] bg-AboutBg bg-cover " />
      <div className="px-5 h-[100vh] w-full items-center flex flex-col bg-[#FFF7ED]">
        <h1 className=" mt-[70px] font-bold text-[32px] text-[#161616]">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <h2 className=" mt-5 text-[16px] font-semibold text-[#161616]">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
          <br /> (Hitch costs extra 😉)
        </h2>

        <h2 className="mt-5 text-[16px] font-semibold text-[#161616]">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </h2>
        <div className="sm:w-[494px] pr-5 absolute top-[690px] mt-20 h-[198px] pt-[30px] pl-[30px] rounded-md bg-[#FFCC8D]">
          <h3 className="text-[24px] text-[#161616] font-bold">
            Your destination is waiting.
            <br /> Your van is ready.
          </h3>
          <button className="bg-black h-[49px] w-[174px] mt-[20px] rounded-lg text-white font-bold">
            <Link to="/Vans">Explore our vans</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
