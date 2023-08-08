import Post from "./Post";
import Postcard from "./Postcard";
import AdCard from "./AdCard";
import Trend from "./Trend";
import Friend from "./Friend";

const Body = () => {
  return (
    <main className="home-body">
      <div>
        <Post />
        <Postcard />
      </div>
      <div>
        <Trend />
        <AdCard />
        <Friend />
      </div>
    </main>
  );
};
export default Body;
