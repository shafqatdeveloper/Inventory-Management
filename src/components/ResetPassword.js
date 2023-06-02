import React from "react";

const ResetPassword = () => {
  return (
    <div className="w-full">
      <div className="w-[45%] px-20 py-5">
        <div>
          <h1 className="text-2xl font-bold text-[#2f2f2f]">
            Reset Your Password
          </h1>
          <h1 className="pt-2 text-gray-400">
            The verification email will be sent to your Mailbox
          </h1>
          <h1 className="text-gray-400">Please Check it</h1>
        </div>
        <form className="w-full py-5 flex flex-col gap-8">
          <div className="flex flex-col w-full gap-4">
            <label
              className="font-semibold tracking-wide text-gray-500"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="test@example.com"
              className="outline-none w-[98%] ml-1 bg-transparent rounded-md p-1 2xl:p-2 outline-[#9311e4] text-[#9311e4]"
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <label
              className="font-semibold tracking-wide text-gray-500"
              htmlFor="email"
            >
              Verification Code
            </label>
            <input
              placeholder="567"
              type="email"
              className="outline-none w-[98%] ml-1 bg-transparent rounded-md p-1 2xl:p-2 outline-black focus:outline-[#9311e4]"
            />
          </div>
          <button className="w-36 py-3 font-semibold tracking-wide bg-[#9311e4] text-white text-lg rounded-full">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
