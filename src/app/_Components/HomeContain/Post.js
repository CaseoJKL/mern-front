import Image from "next/image";
import profile from "@/app/_Assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faImage,
  faPaperclip,
  faFaceSmile,
  faMapMarker,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
const Post = () => {
  return (
    <section className="post">
      <div className="mb-1 flex-row-g md:mb-3">
        <Image src={profile} alt="" />
        <input
          className="text-xs px-3 text-white py-1 placeholder:text-white bg-zinc-700 border-[1px] border-gray-500 rounded-xl  ml-2 w-[90%]"
          placeholder="Whats your on mind?"
        />
      </div>
      <section className="flex items-center justify-between md:mx-4">
        <div className="flex justify-between items-center text-[10px]">
          <FontAwesomeIcon
            className="mr-2 md:text-lg md:mr-4"
            icon={faCamera}
          />
          <FontAwesomeIcon className="mr-2 md:text-lg md:mr-4" icon={faImage} />
          <FontAwesomeIcon
            className="mr-2 md:text-lg md:mr-4"
            icon={faPaperclip}
          />
          <FontAwesomeIcon
            className="mr-2 md:text-lg md:mr-4"
            icon={faMapMarker}
          />
          <FontAwesomeIcon
            className="mr-2 md:text-lg md:mr-4"
            icon={faFaceSmile}
          />
        </div>
        <div className="flex justify-between items-center text-[10px]">
          <div className="!mb-0">
            <FontAwesomeIcon className="mr-1" icon={faPencil} />
            <span>Draft</span>
          </div>
          <button className="px-2 py-1 border-[1px] rounded-lg bg-zinc-950 ml-2 md:ml-6 md:px-6 md:py-2">
            Post
          </button>
        </div>
      </section>
    </section>
  );
};
export default Post;
