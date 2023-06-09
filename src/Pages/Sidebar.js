import React, { useEffect, useRef, useState } from "react";
import { FiHome } from "react-icons/fi";
import {
  AiFillDatabase,
  AiOutlineProject,
  AiOutlineSetting,
  AiOutlineUserAdd,
  AiTwotoneProject,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const SidebarRef = useRef(null);

  // Defining The Items in Sidebar

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (SidebarRef.current && !SidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const menus = [
    // For now the link will not work because these components are not yet developed

    { name: "home", link: "/", icon: FiHome },
    { name: "Profile", link: "/profile", icon: BsFillPersonFill },
    { name: "projects", link: "/projects", icon: AiTwotoneProject },
    { name: "tester database", link: "/testerdb", icon: AiFillDatabase },
    {
      name: "credits and usage",
      link: "/credits&usage",
      icon: AiOutlineProject,
    },
    {
      name: "add user",
      link: "/adduser",
      icon: AiOutlineUserAdd,
    },
    {
      name: "signin",
      link: "/signin",
      icon: CiLogin,
    },
    {
      name: "settings",
      link: "/settings",
      icon: AiOutlineSetting,
    },
  ];
  return (
    <div className="flex z-10 fixed bottom-0 left-0 top-0">
      <section className="flex gap-6">
        <div
          ref={SidebarRef}
          className={`bg-[#0e0e0e]  min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-[#fff] px-4`}
        >
          <div className="py-3 flex justify-end">
            <BiMenuAltLeft
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className=" flex flex-col gap-5">
            {menus?.map((menu, index) => {
              return (
                <Link
                  to={menu?.link}
                  key={index}
                  className={`group ${
                    location.pathname === menu?.link ? "bg-green-400" : ""
                  } flex items-center text-sm gap-3.5 font-medium p-0.5 md:hover:bg-gray-700 rounded-md`}
                >
                  <div>
                    {React.createElement(menu?.icon, {
                      size: "28",
                    })}
                  </div>
                  <h2
                    style={{ transitionDelay: `${index + 3}00ms` }}
                    className={`whitespace-pre duration-500 capitalize ${
                      !open && "opacity-0 translate-x-28 overflow-auto"
                    }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute  left-48 capitalize font-semibold whitespace-pre bg-[#fff] text-gray-700 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2  group-hover:py-1 group-hover:left-[67px] group-hover:duration-300 group-hover:w-fit`}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
