import React from "react";
import pic from "../Assets/pic.jpg";
import "../App.css";
const EditProfile = () => {
  return (
    <div className="px-5">
      <h1 className="pt-3 text-2xl tracking-wide text-[#5f5e5e] font-semibold">
        Edit Profile
      </h1>
      {/* Edit Profile Fields */}
      <div className="flex flex-col w-[35%]">
        <div className="flex py-5 justify-between ">
          <img
            src={pic}
            alt=""
            className="w-24 h-24 2xl:w-32 2xl:h-32 rounded-full"
          />
          <div className="mt-3 flex items-start gap-4">
            <button className="text-red-500 font-semibold text-lg">
              Delete
            </button>
            <button className="text-[#ba2be6] font-semibold text-lg">
              Update
            </button>
          </div>
        </div>
        <form className="pt-3 xl:py-4 flex flex-col gap-5">
          <div className="w-full flex gap-4">
            <div>
              <label
                className="text-sm text-gray-500 font-semibold"
                htmlFor="fName"
              >
                First Name
              </label>
              <input
                type="text"
                name="fName"
                placeholder="John"
                className="outline-none border-[1px] bg-gray-100 border-gray-400 rounded-lg w-full p-1 focus:outline-none "
              />
            </div>
            <div>
              <label
                className="text-sm text-gray-500 font-semibold"
                htmlFor="fName"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lName"
                placeholder="Smith"
                className="outline-none border-[1px] bg-gray-100 border-gray-400 rounded-lg w-full p-1 focus:outline-none "
              />
            </div>
          </div>
          <div>
            <label
              className="text-sm text-gray-500 font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="test@example.com"
              className="outline-none border-[1px] bg-gray-100 border-gray-400 rounded-lg w-full p-1 focus:outline-none "
            />
          </div>
          <div className="w-full flex gap-4">
            <div>
              <label
                className="text-sm text-gray-500 font-semibold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="*********"
                className="outline-none border-[1px] bg-gray-100 border-gray-400 rounded-lg w-full p-1 focus:outline-none "
              />
            </div>
            <div>
              <label
                className="text-sm text-gray-500 font-semibold"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="*********"
                className="outline-none border-[1px] bg-gray-100 border-gray-400 rounded-lg w-full p-1 focus:outline-none "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
