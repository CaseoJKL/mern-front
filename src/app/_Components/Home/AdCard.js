import ad from "@/app/_Assets/images/ad.jpg";
import Image from "next/image";

const AdCard = () => {
  return (
    <section className="adCard !w-[300px] hidden lg:block">
      <div className="pb-[100%] relative mb-4 rounded-lg overflow-hidden">
        <Image className="w-full h-full absolute bg-cover" src={ad} alt="" />
      </div>
      <article>
        <h5 className="text-white mb-2">Figma Designer</h5>
        <div className="text-xs mb-4">
          <span>1425 members</span>
          <span className="ml-3">125 post/day</span>
        </div>
      </article>
      <button className="w-full py-2 rounded-lg mb-3 text-sm text-blue-600 border-[1px] cursor-pointer">
        Join community
      </button>
    </section>
  );
};
export default AdCard;
