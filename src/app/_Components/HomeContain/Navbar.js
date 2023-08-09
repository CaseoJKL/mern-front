import profile from "@/app/_Assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBell,
  faComment,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="z-20 text-white bg-zinc-800 border-b-[1px] border-zinc-600 fixed top-0 left-0 md:left-[280px] w-full md:w-[calc(100%-280px)]">
      <nav className="flex items-center justify-between h-20 px-4">
        <section className="flex items-center justify-center">
          <FontAwesomeIcon className="mr-2" icon={faHome} />
          <h1 className="hidden sm:block sm:text-xl">Home</h1>
        </section>
        <ul className="flex justify-around items-center px-1 ml-1 bg-zinc-700 rounded w-[140px] h-[30px] sm:h-[50px] sm:w-[450px]">
          <li className="px-1 py-1 text-center rounded cursor-pointer flex-row-g sm:py-3 sm:px-6">
            <h4 className="text-[5px] sm:text-[12px] md:text-[14px]">
              Explore
            </h4>
          </li>
          <li className="px-1 py-1 text-center rounded cursor-pointer flex-row-g sm:py-3 sm:px-6">
            <h4 className="text-[5px] sm:text-[12px] md:text-[14px]">
              Community feed
            </h4>
          </li>
          <li className="px-1 py-1 text-center rounded cursor-pointer activate flex-row-g sm:py-3 sm:px-6">
            <h4 className="text-[5px] sm:text-[12px] md:text-[14px]">
              Mutual friend
            </h4>
            <span className="text-[5px] bg-zinc-800 rounded-full px-2 sm:py-1 ml-2 sm:text-xs">
              12
            </span>
          </li>
        </ul>
        <section className="flex items-center justify-center">
          <div className="w-[20px] h-[20px] sm:w-[35px] sm:h-[35px] bg-zinc-700 rounded-full mx-1 flex-row-g cursor-pointer">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="w-[20px] h-[20px] sm:w-[35px] sm:h-[35px] bg-zinc-700 rounded-full mx-1 flex-row-g cursor-pointer">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <h2 className="hidden sm:block sm:text-center">Sara N</h2>
          <div className="relative w-[20px] h-[20px] sm:w-[35px] sm:h-[35px] bg-zinc-700 rounded-full mx-1 flex-row-g cursor-pointer">
            <Image className="rounded-full" src={profile} alt="" />
            <FontAwesomeIcon
              className="mr-2 absolute px-[1px] py-[1px] top-3 lg:top-6 -right-1 text-xs lg:px-[2px] lg:py-[2px] cursor-pointer bg-white text-black rounded-full"
              icon={faAngleDown}
            />
          </div>
        </section>
      </nav>
    </header>
  );
};
export default Navbar;
