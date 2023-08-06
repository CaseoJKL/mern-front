import Image from "next/image";
import profile from "@/app/_Assets/images/profile.jpg";
import uidesigner from "@/app/_Assets/images/uidesigner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faPeopleGroup,
  faShoppingBag,
  faCalendar,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
const LeftSideBar = () => {
  return (
    <main className="main_LeftSideBar">
      <section className="flex justify-start items-center pt-10 pb-5 font-bold text-blue-600">
        <Image
          className="w-[20%] rounded-full mr-2"
          src={profile}
          alt="profile image"
        />
        <h1>Kaloka</h1>
      </section>
      <section>
        <div className="w-full relative">
          <FontAwesomeIcon
            className="absolute top-[13px] left-2"
            icon={faSearch}
            style={{ fontSize: "14px", color: "white" }}
          />
          <input
            className="w-full text-xs pl-7 pr-3 text-white py-3 placeholder:text-white bg-zinc-700 rounded border-[1px] border-gray-500"
            placeholder="Explore Kaloka..."
          />
        </div>
      </section>
      <section className="main_LeftSideBar-MenuSection">
        <div className="active">
          <FontAwesomeIcon className="mr-2" icon={faHome} />
          <h4>Home</h4>
        </div>
        <div className="">
          <FontAwesomeIcon className="mr-2" icon={faPeopleGroup} />
          <h4>Commiunity</h4>
        </div>
        <div className="">
          <FontAwesomeIcon className="mr-2" icon={faShoppingBag} />
          <h4>Marcketplace</h4>
          <span>4 new listing</span>
        </div>
        <div className="">
          <FontAwesomeIcon className="mr-2" icon={faCalendar} />
          <h4>Kaloka events</h4>
        </div>
        <div className="">
          <FontAwesomeIcon className="mr-2" icon={faNewspaper} />
          <h4>News feed</h4>
        </div>
      </section>
      <hr className="border-zinc-600" />
      <section className="main_LeftSideBar-CommunitySection">
        <header>
          <h1>My Community</h1>
          <p>29</p>
        </header>
        <div>
          <Image
            className="w-[35px] h-[35px] rounded-full"
            src={uidesigner}
            alt=""
          />
          <section>
            <h1>Indonesia UI Designer</h1>
            <div>
              <span>734</span>
              <span>member</span>
            </div>
          </section>
        </div>
      </section>
      <hr className="border-zinc-600" />
      <section>
        <div>
          <h1>Upcomming event</h1>
          <spam>12</spam>
        </div>
        <div>
          <div>
            <span>20</span>
            <span>des</span>
          </div>
          <div>
            <h1>Product Designer</h1>
            <div>
              <span>73k</span>
              <span>interested</span>
              <span>-</span>
              <span>7.7k</span>
              <span>going</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default LeftSideBar;
