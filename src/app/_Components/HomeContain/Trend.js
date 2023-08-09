import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const Trend = () => {
  return (
    <section className="trend !w-[300px] hidden lg:block mb-20">
      <header className=" flex justify-between items-center">
        <h2>Today Trending</h2>
        <FontAwesomeIcon icon={faAngleDown} />
      </header>
      <ul>
        <li className="my-6 flex justify-between items-center">
          <div>
            <h3 className="text-white">Figma maintenance</h3>
            <p className="text-sm mt-1">125 post today</p>
          </div>
          <span className="text-xs bg-zinc-700 px-1 py-[2px] rounded-full ">
            66 in 1 hour
          </span>
        </li>
        <li className="my-6 flex justify-between items-center">
          <div>
            <h3 className="text-white">Blender Update</h3>
            <p className="text-sm mt-1">117 post today</p>
          </div>
          <span className="text-xs bg-zinc-700 px-1 py-[2px] rounded-full ">
            45 in 1 hour
          </span>
        </li>
        <li className="my-6 flex justify-between items-center">
          <div>
            <h3 className="text-white">Javascript new</h3>
            <p className="text-sm mt-1">32 post today</p>
          </div>
          <span className="text-xs bg-zinc-700 px-1 py-[2px] rounded-full ">
            24 in 1 hour
          </span>
        </li>
      </ul>
      <footer className="my-3 py-2 text-blue-600 text-center cursor-pointer">
        See all
      </footer>
    </section>
  );
};
export default Trend;
