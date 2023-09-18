import LeftSideLogin from "../Common/LeftSideLogin";
import student from "@/app/_Assets/images/Student.png";

const IntroduceContain = () => {
  return (
    <main className="h-[100vh] flex-row-g">
      <LeftSideLogin />
      <section className="flex flex-col-g basis-[100vh] md:basis-[50vw] max-w-[720px] text-center pt-10">
        <h1 className="text-[30px] sm:text-[40px] pt-10 sm:pt-0 font-bold">
          Introduce yourself
        </h1>
        <p className="text-sm">
          we d love to learn about you. Couldyou share a few sentences about
          your background and where you are from?
        </p>
        <form className="flex w-[90%] flex-col-g gap-y-4 mt-10 ">
          <div className="flex flex-wrap items-center justify-between md:justify-evenly w-full gap-2 !max-w-[620px]">
            <div className="w-[45%] max-w-[250px] flex flex-col items-center justify-start border-[1px] rounded-2xl px-4">
              <div className="flex items-start justify-between w-full pt-3 gap-x-3 ">
                <div>
                  <img
                    className="w-[40px] h-[50px] my-3"
                    src={student.src}
                    alt="student"
                  />
                  <h1 className="font-bold text-left">I am Student</h1>
                </div>
                <input type="checkbox" />
              </div>
              <p className="w-full pb-3 text-sm text-left">
                who wanna learn for school
              </p>
            </div>
            <div className="w-[45%] max-w-[250px] flex flex-col items-center justify-start border-[1px] rounded-2xl px-4">
              <div className="flex items-start justify-between w-full pt-3 gap-x-3 ">
                <div>
                  <img
                    className="w-[40px] h-[50px] my-3"
                    src={student.src}
                    alt="student"
                  />
                  <h1 className="font-bold text-left">I am Student</h1>
                </div>
                <input type="checkbox" />
              </div>
              <p className="w-full pb-3 text-sm text-left">
                who wanna learn for school
              </p>
            </div>
            <div className="w-[45%] max-w-[250px] flex flex-col items-center justify-start border-[1px] rounded-2xl px-4">
              <div className="flex items-start justify-between w-full pt-3 gap-x-3 ">
                <div>
                  <img
                    className="w-[40px] h-[50px] my-3"
                    src={student.src}
                    alt="student"
                  />
                  <h1 className="font-bold text-left">I am Student</h1>
                </div>
                <input type="checkbox" />
              </div>
              <p className="w-full pb-3 text-sm text-left">
                who wanna learn for school
              </p>
            </div>
            <div className="w-[45%] max-w-[250px] flex flex-col items-center justify-start border-[1px] rounded-2xl px-4">
              <div className="flex items-start justify-between w-full pt-3 gap-x-3 ">
                <div>
                  <img
                    className="w-[40px] h-[50px] my-3"
                    src={student.src}
                    alt="student"
                  />
                  <h1 className="font-bold text-left">I am Student</h1>
                </div>
                <input type="checkbox" />
              </div>
              <p className="w-full pb-3 text-sm text-left">
                who wanna learn for school
              </p>
            </div>
          </div>
          <button className="w-full px-3 py-3 text-white bg-black rounded-lg">
            Get Started
          </button>
        </form>
        <p className="my-4 text-sm">You are ready to rock 🔥</p>
      </section>
    </main>
  );
};
export default IntroduceContain;
