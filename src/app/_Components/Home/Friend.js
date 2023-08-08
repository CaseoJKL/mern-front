import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import client from "@/app/_Assets/images/client.jpg";
import Image from "next/image";
import friend1 from "@/app/_Assets/images/friend1.jpg";
import friend2 from "@/app/_Assets/images/friend2.jpg";
const Friend = () => {
  return (
    <section className="friend !w-[300px] hidden lg:block mb-20">
      <header className=" flex justify-between items-center">
        <h2>My friends</h2>
        <FontAwesomeIcon icon={faAngleDown} />
      </header>
      <ul>
        <li className="my-3 flex justify-between items-center">
          <div className="flex-row-g">
            <Image
              className="w-[35px] h-[35px] rounded-full"
              src={client}
              alt=""
            />
            <div className="ml-3">
              <h3 className="text-white">Chrish Bule</h3>
              <p className="text-sm mt-1">Last active recently</p>
            </div>
          </div>
          <span className="text-xs bg-zinc-700 px-1 py-[2px] rounded-full ">
            12
          </span>
        </li>
        <li className="my-3 flex justify-between items-center">
          <div className="flex-row-g">
            <Image
              className="w-[35px] h-[35px] rounded-full"
              src={friend1}
              alt=""
            />
            <div className="ml-3">
              <h3 className="text-white">Maria Galau</h3>
              <p className="text-sm mt-1">Last active recently</p>
            </div>
          </div>
          <span className="text-xs bg-zinc-700 px-1 py-[2px] rounded-full "></span>
        </li>
        <li className="my-3 flex justify-between items-center">
          <div className="flex-row-g">
            <Image
              className="w-[35px] h-[35px] rounded-full"
              src={friend2}
              alt=""
            />
            <div className="ml-3">
              <h3 className="text-white">Ridwan Beler</h3>
              <p className="text-sm mt-1">Last active recently</p>
            </div>
          </div>
          <span className="text-xs bg-zinc-700 px-1 py-[2px] rounded-full ">
            11
          </span>
        </li>
      </ul>
      <footer className="my-3 py-2 text-blue-600 text-center">See all</footer>
    </section>
  );
};
export default Friend;
