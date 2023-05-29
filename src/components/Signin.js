import React from "react";
import Sidebar from "./Sidebar.js";
import "../App.css";
const Signin = () => {
  return (
    // Animated Background
    <div className="w-full flex relative ml-16 sm:flex-row h-screen">
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
          <form className="bg-[#f0ebeb] gap-10 py-10 rounded-xl flex flex-col w-full items-center justify-center sm:ml-2 md:ml-5 p-3">
            <h1 className="text-2xl font-normal text-[#393838]">Sign In</h1>
            <div className="flex w-full  flex-col font-normal">
              <label htmlFor="email" className="text-gray-500 pl-0.5">
                Email
              </label>
              <input
                type="email"
                placeholder="temp@gmail.com"
                id="email"
                className="border-b-[1px] bg-transparent  text-gray-600 border-b-[#4e4c4c] font-normal  w-full px-1 py-1.5 outline-none focus:outline-none "
              />
            </div>
            <div className="flex w-full flex-col font-normal">
              <label htmlFor="password" className="text-gray-500 pl-0.5">
                Password
              </label>
              <input
                type="password"
                placeholder="**********"
                id="password"
                className="border-b-[1px]  bg-transparent text-gray-600 border-b-[#4e4c4c]  w-full font-normal  outline-none px-1 py-1.5 focus:outline-none "
              />
            </div>
            <div className="bg-blue-600 mt-7 text-white font-semibold w-full text-center py-2 hover:bg-blue-800 cursor-pointer rounded-full">
              <button>Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
