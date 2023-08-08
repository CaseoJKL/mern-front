import Post from "./Post";
import Postcard from "./Postcard";
import AdCard from "./AdCard";

const Body = () => {
  return (
    <main className="home-body">
      <div>
        <Post />
        <Postcard />
      </div>
      <div>
        <AdCard />
      </div>
    </main>
  );
};
export default Body;
