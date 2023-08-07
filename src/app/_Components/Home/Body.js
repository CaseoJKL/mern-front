import Post from "./Post";
import Image from "next/image";
import profile from "@/app/_Assets/images/profile.jpg";

const Body = () => {
  return (
    <main className="home-body text-gray-300">
      <Post />
      <div className="postcard">
        <header>
          <li>
            <Image src={profile} alt="" />
            <div>
              <h4>Lucky Andreas</h4>
              <span>
                12 minutes ago on <h5>3D Stock Contriuter</h5>
              </span>
            </div>
          </li>
          <li></li>
        </header>
      </div>
    </main>
  );
};
export default Body;
