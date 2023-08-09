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
      <div>
        <Image src={profile} alt="" />
        <input placeholder="Whats your on mind?" />
      </div>
      <section>
        <div>
          <FontAwesomeIcon icon={faCamera} />
          <FontAwesomeIcon icon={faImage} />
          <FontAwesomeIcon icon={faPaperclip} />
          <FontAwesomeIcon icon={faMapMarker} />
          <FontAwesomeIcon icon={faFaceSmile} />
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faPencil} />
            <span>Draft</span>
          </div>
          <button>Post</button>
        </div>
      </section>
    </section>
  );
};
export default Post;
