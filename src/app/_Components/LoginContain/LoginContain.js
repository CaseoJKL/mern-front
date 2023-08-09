import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import twitter from "@/app/_Assets/images/twitter.png";
import google from "@/app/_Assets/images/google.png";
import github from "@/app/_Assets/images/github.png";
import LeftSideLogin from "@/app/_Components/Common/LeftSideLogin";
const LoginContain = () => {
  return (
    <main className="h-[100vh] flex-row-g">
      <LeftSideLogin />
      <section className="flex flex-col-g basis-[100vh] md:basis-[50vw] max-w-[720px]">
        <h1 className="text-[40px] font-bold">Welcome Back!</h1>
        <form className="flex w-[80%] flex-col-g gap-y-2 my-5">
          <input
            className="w-full px-3 py-3 placeholder:text-gray-600 border-[1px] rounded-lg"
            placeholder="Phone number"
          />
          <input
            className="w-full px-3 py-3 placeholder:text-gray-600 border-[1px] rounded-lg"
            placeholder="Email"
            type="email"
          />
          <div className="relative w-full">
            <input
              className="w-full px-3 py-3 placeholder:text-gray-600 border-[1px] rounded-lg"
              placeholder="Password"
              type="password"
            />
            <FontAwesomeIcon
              className="absolute cursor-pointer top-4 right-4"
              icon={faEye}
            />
          </div>
          <button className="w-full px-3 py-3 text-white bg-black rounded-lg">
            Create account
          </button>
        </form>
        <div className="relative w-[80%] my-4">
          <hr className="w-[90%] h-[1px] mx-auto bg-gray-600" />
          <span className="absolute px-2 py-1 bg-white -top-4 left-[calc(50%-15.5px)]">
            or
          </span>
        </div>
        <p className="my-4 text-sm">
          Already have an account?
          <span className="ml-2 text-red-400 cursor-pointer">Sign in</span>
        </p>
        <div className="w-[80%]">
          <button className="w-full my-1 px-3 py-3 border-[1px] rounded-lg text-xs font-medium">
            <Image className="inline-block w-[24px]" src={google} alt="" />
            Continue with Google
          </button>
          <button className="w-full px-3 py-3 border-[1px] rounded-lg my-1 text-xs font-medium">
            <Image className="inline-block w-[24px]" src={github} alt="" />
            Continue with Github
          </button>
          <button className="w-full px-3 py-3 border-[1px] rounded-lg my-1 text-xs font-medium">
            <Image className="inline-block w-[24px]" src={twitter} alt="" />
            Continue with Twitter
          </button>
        </div>
      </section>
    </main>
  );
};
export default LoginContain;
