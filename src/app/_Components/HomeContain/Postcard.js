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
const Postcard = () => {
  return (
    <div className="postcard">
      <header className="flex items-center justify-between">
        <li className="flex items-center justify-start list-none">
          <Image src={client} alt="" />
          <article className="ml-2 flex-col-g">
            <h5 className="text-white mb-1 text-[10px] md:text-base">
              Lucky Andreas
            </h5>
            <span className="ext-[6px] md:text-xs flex-row-g gap-x-[4px]">
              <FontAwesomeIcon icon={faClock} />
              12 minutes ago on <h5>3D Stock Contriuter</h5>
            </span>
          </article>
        </li>
        <li className="flex items-center justify-start list-none">
          <FontAwesomeIcon className="mx-2 md:mx-3" icon={faSave} />
          <FontAwesomeIcon className="mx-2 md:mx-3" icon={faEllipsisV} />
        </li>
      </header>
      <p className=" text-[9px] my-1 md:text-sm">
        A post office refers to an office where postal service is offered to the
        people.
      </p>
      <div className="relative pt-[100%] rounded-lg overflow-hidden">
        <Image
          className="absolute top-0 w-full h-full bg-cover"
          src={post}
          alt=""
        />
      </div>
      <ul className="flex items-center justify-between my-3 text-xs sm:justify-around">
        <li className="clicked flex justify-between items-center text-[8px] sm:text-xs">
          <FontAwesomeIcon icon={faThumbsUp} />
          <h6 className="mx-[3px]">Liked post</h6>
          <span className="px-1 rounded-full bg-zinc-700 text-[6px] sm:text-[10px]">
            1.7k
          </span>
        </li>
        <li className="flex justify-between items-center text-[8px] sm:text-xs">
          <FontAwesomeIcon icon={faComment} />
          <h6 className="mx-[3px]">Comment</h6>
          <span className="px-1 rounded-full bg-zinc-700 text-[6px] sm:text-[10px]">
            55
          </span>
        </li>
        <li className="flex justify-between items-center text-[8px] sm:text-xs">
          <FontAwesomeIcon icon={faShareAlt} />
          <h6 className="mx-[3px]">Share</h6>
          <span className="px-1 rounded-full bg-zinc-700 text-[6px] sm:text-[10px]">
            12
          </span>
        </li>
      </ul>
      <hr className="border-zinc-600" />
      <section className="w-full my-2 mb-1 text-white flex-row-g md:mb-3">
        <Image src={profile} alt="" />
        <div className="relative w-full p-0">
          <input
            className="text-xs px-3 text-white py-1 placeholder:text-white bg-zinc-700 border-[1px] border-gray-500 rounded-xl  ml-2 !w-[95%]"
            placeholder="Whats your on mind?"
          />
          <div className="absolute top-[8px] p-0 sm:right-8 right-4 text-[12px] flex-row-g gap-x-[4px]">
            <FontAwesomeIcon className="cursor-pointer" icon={faCamera} />
            <FontAwesomeIcon className="cursor-pointer" icon={faImage} />
            <FontAwesomeIcon className="cursor-pointer" icon={faPaperclip} />
            <FontAwesomeIcon className="cursor-pointer" icon={faFaceSmile} />
          </div>
        </div>
      </section>
      <main className="text-[10px]">
        <hgroup className="flex items-center justify-between pt-0 my-2">
          <div className="flex items-center justify-between pt-0 my-2">
            <p>All comments</p>
            <FontAwesomeIcon className="pt-1" icon={faAngleDown} />
          </div>
          <div className="flex items-center justify-between pt-0 my-2">
            <span>Sort by</span>
            <p className="mx-1 my-0 text-white">Most popular</p>
          </div>
        </hgroup>
        <article className="flex items-start justify-start mb-3">
          <Image src={client} alt="" />
          <hgroup className="flex-col items-center justify-center w-full mt-0 ml-2">
            <h5>
              <strong className="text-white">Lucky Andreas:</strong> 12 minutes
              ago on 3D Stock Contriuter
            </h5>
            <section className="flex items-center !justify-between mt-2">
              <div className="flex justify-start items-center !static cursor-pointer text-[8px] sm:text-xs">
                <FontAwesomeIcon className="mr-1" icon={faForward} />
                <p>Reply comment</p>
                <span className="px-[2px] bg-zinc-600 rounded-full ml-1">
                  12
                </span>
              </div>
              <main className="flex-row-g">
                <hgroup className="cursor-pointer flex-row-g">
                  <FontAwesomeIcon className="mx-1" icon={faArrowUp} />
                  <span>Upvote</span>
                </hgroup>
                |
                <hgroup className="cursor-pointer flex-row-g">
                  <span>Downvote</span>
                  <FontAwesomeIcon className="mx-1" icon={faArrowDown} />
                </hgroup>
              </main>
            </section>
          </hgroup>
        </article>
      </main>
      <hr className="border-zinc-600" />
      <footer className="text-blue-700 text-center text-[8px] py-3 cursor-pointer sm:text-base">
        Veiw all comments
      </footer>
    </div>
  );
};
export default Postcard;
