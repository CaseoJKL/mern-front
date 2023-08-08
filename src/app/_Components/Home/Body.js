import Post from "./Post";
import Image from "next/image";
import client from "@/app/_Assets/images/client.jpg";
import profile from "@/app/_Assets/images/profile.jpg";
import post from "@/app/_Assets/images/post.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faSave,
  faEllipsisV,
  faThumbsUp,
  faComment,
  faShareAlt,
  faCamera,
  faImage,
  faPaperclip,
  faFaceSmile,
  faAngleDown,
  faForward,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  return (
    <main className="home-body text-gray-300">
      <Post />
      <div className="postcard">
        <header>
          <li>
            <Image src={client} alt="" />
            <article>
              <h5>Lucky Andreas</h5>
              <span>
                <FontAwesomeIcon icon={faClock} />
                12 minutes ago on <h5>3D Stock Contriuter</h5>
              </span>
            </article>
          </li>
          <li>
            <FontAwesomeIcon icon={faSave} />
            <FontAwesomeIcon icon={faEllipsisV} />
          </li>
        </header>
        <p>
          A post office refers to an office where postal service is offered to
          the people.
        </p>
        <div>
          <Image src={post} alt="" />
        </div>
        <ul>
          <li className="clicked">
            <FontAwesomeIcon icon={faThumbsUp} />
            <h6>Liked post</h6>
            <span>1.7k</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            <h6>Comment</h6>
            <span>55</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faShareAlt} />
            <h6>Share</h6>
            <span>12</span>
          </li>
        </ul>
        <hr className="border-zinc-600" />
        <section>
          <Image src={profile} alt="" />
          <div>
            <input placeholder="Whats your on mind?" />
            <div>
              <FontAwesomeIcon icon={faCamera} />
              <FontAwesomeIcon icon={faImage} />
              <FontAwesomeIcon icon={faPaperclip} />
              <FontAwesomeIcon icon={faFaceSmile} />
            </div>
          </div>
        </section>
        <main>
          <hgroup>
            <div>
              <p>All comments</p>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div>
              <span>Sort by</span>
              <p>Most popular</p>
            </div>
          </hgroup>
          <article>
            <Image src={client} alt="" />
            <hgroup>
              <h5>
                <strong className="text-white">Lucky Andreas:</strong> 12
                minutes ago on 3D Stock Contriuter
              </h5>
              <section>
                <div>
                  <FontAwesomeIcon icon={faForward} />
                  <p>Reply comment</p>
                  <span>12</span>
                </div>
                <main>
                  <hgroup>
                    <FontAwesomeIcon icon={faArrowUp} />
                    <span>Upvote</span>
                  </hgroup>
                  |
                  <hgroup>
                    <span>Downvote</span>
                    <FontAwesomeIcon icon={faArrowDown} />
                  </hgroup>
                </main>
              </section>
            </hgroup>
          </article>
        </main>
        <hr className="border-zinc-600" />
        <footer>Veiw all comments</footer>
      </div>
    </main>
  );
};
export default Body;
