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
    <header className="home_header">
      <nav>
        <section>
          <FontAwesomeIcon className="mr-2" icon={faHome} />
          <h1>Home</h1>
        </section>
        <ul>
          <li className="activate">
            <h4>Explore</h4>
          </li>
          <li>
            <h4>Community feed</h4>
          </li>
          <li>
            <h4>Mutual friend</h4>
            <span>12</span>
          </li>
        </ul>
        <section>
          <div>
            <FontAwesomeIcon className="mr-2" icon={faComment} />
          </div>
          <div>
            <FontAwesomeIcon className="mr-2" icon={faBell} />
          </div>
          <h2>Sara N</h2>
          <div className="relative">
            <Image className="rounded-full" src={profile} alt="" />
            <FontAwesomeIcon
              className="mr-2 absolute top-6 -right-1 text-xs px-[2px] py-[2px] cursor-pointer bg-white text-black rounded-full"
              icon={faAngleDown}
            />
          </div>
        </section>
      </nav>
    </header>
  );
};
export default Navbar;
