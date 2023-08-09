import Image from "next/image";
import man from "@/app/_Assets/images/man.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const LeftSideLogin = () => {
  return (
    <section className="w-full h-[100vh] p-5 basis-[50vw] max-w-[720px] hidden md:block">
      <div className="relative w-full h-full overflow-hidden rounded-3xl pb-2/3">
        <FontAwesomeIcon
          className="absolute z-20 px-2 py-2 text-xl bg-white rounded-lg left-[5%] top-[3%] "
          icon={faQuoteLeft}
        />
        <Image className="absolute w-full h-full bg-center" src={man} alt="" />
        <div className="w-full">
          <span className="absolute bottom-[30%] text-center px-4 py-2 left-[5%] bg-clip-padding bg-opacity-60 backdrop-blur-sm rounded-full bg-gray-100">
            SocialMedia.com
          </span>
          <p className="absolute bottom-[8%] left-[5%] text-white ">
            "The future of energy and the way to carbon net zero goes through
            digitalisation. Our plants are powered by pumps, turbines, and
            generators, forming the backbone of modern infrastructure. As tech
            enthusiasts, we closely monitor these machines to prevent any
            potential malfunctions that may arise.""
          </p>
          <span className="absolute bottom-[3.5%] left-[5%] text-sm text-white">
            Pablo Ecaner - UX Researcher
          </span>
        </div>
        <div className="w-full flex-row-g">
          <span className="absolute bottom-[1%] left-[2%] w-[19%] h-[6px] rounded-full bg-red-400"></span>
          <span className="absolute bottom-[1%] left-[21.5%] w-[19%] h-[6px] rounded-full bg-gray-400"></span>
          <span className="absolute bottom-[1%] left-[41%] w-[19%] h-[6px] rounded-full bg-gray-400"></span>
          <span className="absolute bottom-[1%] left-[60.5%] w-[19%] h-[6px] rounded-full bg-gray-400"></span>
          <span className="absolute bottom-[1%] left-[79.8%] w-[19%] h-[6px] rounded-full bg-gray-400"></span>
        </div>
      </div>
    </section>
  );
};
export default LeftSideLogin;
