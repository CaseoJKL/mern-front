import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const Trend = () => {
  return (
    <section className="trend !w-[300px] hidden lg:block mb-20">
      <header className="flex items-center justify-between ">
        <h2>Today Trending</h2>
        <FontAwesomeIcon icon={faAngleDown} />
      </header>
      <ul>
        <li className="flex items-center justify-between my-6">
          <div>
            <h3 className="text-white">Figma maintenance</h3>
            <p className="mt-1 text-sm">125 post today</p>
          </div>
          <span className="text-xs bg-zinc-700 px-1 py-[2px] rounded-full ">
            66 in 1 hour
          </span>
        </li>
        <li className="flex items-center justify-between my-6">
          <div>
            <h3 className="text-white">Blender Update</h3>
            <p className="mt-1 text-sm">117 post today</p>
          </div>
          <span className="text-xs bg-zinc-700 px-1 py-[2px] rounded-full ">
            45 in 1 hour
          </span>
        </li>
        <li className="flex items-center justify-between my-6">
          <div>
            <h3 className="text-white">Javascript new</h3>
            <p className="mt-1 text-sm">32 post today</p>
          </div>
          <span className="text-xs bg-zinc-700 px-1 py-[2px] rounded-full ">
            24 in 1 hour
          </span>
        </li>
      </ul>
      <footer className="py-2 my-3 text-center text-blue-600 cursor-pointer">
        See all
      </footer>
    </section>
  );
};
export default Trend;
