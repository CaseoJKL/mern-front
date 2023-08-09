import Body from "../../_Components/HomeContain/Body";
import LeftSideBar from "../../_Components/HomeContain/LeftSideBar";
import Navbar from "../../_Components/HomeContain/Navbar";

const Home = () => {
  return (
    <main className="flex items-start justify-start">
      <LeftSideBar />
      <div className="w-[100vw]">
        <Navbar />
        <Body />
      </div>
    </main>
  );
};
export default Home;
