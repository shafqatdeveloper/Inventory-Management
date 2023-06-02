import React, { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdNotifications,
  MdOutlineEdit,
} from "react-icons/md";
import Sidebar from "./Sidebar.js";
import pic from "../Assets/image.jpg";
import { BsShieldFillCheck } from "react-icons/bs";
import EditProfile from "../components/EditProfile.js";
import ResetPassword from "../components/ResetPassword.js";

const Profile = () => {
  const [profileEdit, setProfileEdit] = useState(true);
  const [passwordReset, setPasswordReset] = useState(false);
  const handleProfilePage = (e) => {
    e.preventDefault();
    setProfileEdit(true);
    setPasswordReset(false);
  };
  const handlePasswordPage = (e) => {
    e.preventDefault();
    setProfileEdit(false);
    setPasswordReset(true);
  };
  return (
    <div className="w-full">
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-screen">
        <div className="ml-16 h-full">
          <div className="flex items-center p-3  border-b-2 justify-between">
            <h1 className="text-xl font-semibold text-[#7a7979]">My Profile</h1>
            <div className="flex items-center gap-3">
              <MdNotifications className="text-gray-500" size={22} />
              <div className="flex items-center gap-4">
                <img src={pic} alt="" className="w-12 h-12 rounded-full" />
                <div>
                  <MdKeyboardArrowDown size={22} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[3px] bg-gray-300 shadow-sm shadow-black/60 "></div>
          <div className="h-[88.2vh] 2xl:h-[91vh] flex">
            {/* Edit Profile and Reset Password Options */}
            <div className="w-[15%] px-2 flex flex-col gap-5 text-gray-500 py-4 h-full border-r-[3px] border-r-gray-300">
              <div
                onClick={handleProfilePage}
                className="flex items-center gap-3"
              >
                <MdOutlineEdit size={24} />
                <button className="text-lg font-semibold">Edit Profile</button>
                {profileEdit && <MdKeyboardArrowRight size={27} />}
              </div>
              <div
                onClick={handlePasswordPage}
                className="flex items-center gap-[18px]"
              >
                <BsShieldFillCheck size={17} />
                <button className="text-lg font-semibold">Password</button>
                {passwordReset && (
                  <MdKeyboardArrowRight size={27} className="ml-2" />
                )}
              </div>
            </div>
            {/* Profile and Password Page */}
            <div className="w-[80%] h-full">
              {profileEdit ? <EditProfile /> : <ResetPassword />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
