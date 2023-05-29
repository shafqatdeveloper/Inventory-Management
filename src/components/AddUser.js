import React from "react";
import Sidebar from "./Sidebar.js";
import "../App.css";
const AddUser = () => {
  return (
    // Animated Background
    <div className="w-full flex relative sm:flex-row h-screen bg-[#393131]">
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Sidebar />
      <div className="flex items-center justify-center w-full">
        <div className="w-full sm:w-96 z-10 px-1 sm:px-0 h-full flex justify-center items-center">
          <form className="bg-[#e7e4e4] gap-7 py-10 rounded-lg flex flex-col w-full items-center justify-center sm:ml-2 md:ml-5 p-3">
            <h1 className="text-2xl font-normal text-[#393838]">Add User</h1>
            <div className="flex gap-2 ">
              <div className="flex w-full  flex-col font-normal">
                <label htmlFor="fName" className="text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  id="fName"
                  className="border-b-[1px] bg-transparent border-b-[#4b4a4a] font-normal  w-full px-1 py-1.5 outline-none focus:outline-none "
                />
              </div>
              <div className="flex w-full flex-col font-normal">
                <label htmlFor="lName" className="text-gray-500">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  id="lName"
                  className="border-b-[1px] bg-transparent w-full font-normal border-b-[#4b4a4a] outline-none px-1 py-1.5 focus:outline-none "
                />
              </div>
            </div>
            <div className="flex w-full  flex-col font-normal">
              <label htmlFor="username" className="text-gray-500">
                Username
              </label>
              <input
                type="text"
                placeholder="temp123"
                id="username"
                className="border-b-[1px] bg-transparent border-b-[#4b4a4a] font-normal  w-full px-1 py-1.5 outline-none focus:outline-none "
              />
            </div>
            <div className="flex w-full  flex-col font-normal">
              <label htmlFor="email" className="text-gray-500">
                Email
              </label>
              <input
                type="email"
                placeholder="temp@gmail.com"
                id="email"
                className="border-b-[1px] bg-transparent border-b-[#4b4a4a] font-normal  w-full px-1 py-1.5 outline-none focus:outline-none "
              />
            </div>
            <div className="flex gap-2 ">
              <div className="flex w-full  flex-col font-normal">
                <label htmlFor="password" className="text-gray-500">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*******"
                  id="password"
                  className="border-b-[1px] bg-transparent border-b-[#4b4a4a] font-normal  w-full px-1 py-1.5 outline-none focus:outline-none "
                />
              </div>
              <div className="flex w-full flex-col font-normal">
                <label htmlFor="confirmPassword" className="text-gray-500">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="*******"
                  id="confirmPassword"
                  className="border-b-[1px] bg-transparent w-full font-normal border-b-[#4b4a4a] outline-none px-1 py-1.5 focus:outline-none "
                />
              </div>
            </div>

            <div className="bg-blue-600 mt-7 text-white font-normal w-full text-center py-2 rounded-3xl">
              <button>Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
