import LeftSideBar from "../_Components/Home/LeftSideBar";
import Navbar from "../_Components/Home/Navbar";

const Home = () => {
  return (
    <main className="flex justify-start items-center">
      <LeftSideBar />
      <div className="w-[100vw]">
        <Navbar />
      </div>
    </main>
  );
};
export default Home;
