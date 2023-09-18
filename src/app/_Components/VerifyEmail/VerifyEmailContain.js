import LeftSideLogin from "../Common/LeftSideLogin";

const VerifyEmailContain = () => {
  const firstLetterEmail = "m";
  const sourceOfEmail = "gmail";
  return (
    <main className="h-[100vh] flex-row-g">
      <LeftSideLogin />
      <section className="flex flex-col-g basis-[100vh] md:basis-[50vw] max-w-[720px] text-center pt-20">
        <h1 className="text-[40px] font-bold">Enter the code</h1>
        <p className="text-sm">
          Enter the ETP code that we sent to your email {firstLetterEmail}****@
          {sourceOfEmail}.com
          <br /> Be careful not to Shore the code with anyone.
        </p>
        <form className="flex w-[80%] flex-col-g gap-y-2 mt-10">
          <div className="w-[90%] flex items-center justify-around mb-40">
            <input
              className="w-[15%] py-5 text-lg font-bold bg-gray-50 placeholder:text-gray-600 border-[1px] rounded-lg text-center"
              maxLength={1}
            />
            <input
              className="w-[15%] py-5 text-lg font-bold bg-gray-50 placeholder:text-gray-600 border-[1px] rounded-lg text-center"
              maxLength={1}
            />
            <input
              className="w-[15%] py-5 text-lg font-bold bg-gray-50 placeholder:text-gray-600 border-[1px] rounded-lg text-center"
              maxLength={1}
            />
            <input
              className="w-[15%] py-5 text-lg font-bold bg-gray-50 placeholder:text-gray-600 border-[1px] rounded-lg text-center"
              maxLength={1}
            />
            <input
              className="w-[15%] py-5 text-lg font-bold bg-gray-50 placeholder:text-gray-600 border-[1px] rounded-lg text-center"
              maxLength={1}
            />
            <input
              className="w-[15%] py-5 text-lg font-bold bg-gray-50 placeholder:text-gray-600 border-[1px] rounded-lg text-center"
              maxLength={1}
            />
          </div>
          <button className="w-full px-3 py-3 text-white bg-black rounded-lg">
            Verify Email
          </button>
        </form>
        <p className="my-4 text-sm">One more step to get started</p>
      </section>
    </main>
  );
};
export default VerifyEmailContain;
