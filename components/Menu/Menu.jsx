import React, { useState } from "react";
import { CONSTANTS } from "../../helpers/constants";
import { MdCall } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import { RiAdminFill } from "react-icons/ri";

const Menus = CONSTANTS.Menu;
const Menu = () => {
  const [Hamburger, setHamburger] = useState(false);
  const router = useRouter();
  const navbuttons = [
    { label: "Home", target: "/" },
    { label: "Our Tours", target: "/admin" },
    { label: "Packages", target: "/allpackages" },
    { label: "About US", target: "/" },
    { label: "Testimonials", target: "/" },
    { label: "Blogs", target: "/" },
  ];
  const handleNavigation = (target) => {
    if (target.startsWith("/")) {
      router.push(target);
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (Hamburger) {
      setHamburger(!Hamburger);
    }
  };
  return (
    <>
      <div className="h-[24px] flex justify-center items-center text-white bg-slate-500 text-[12px] font-Roboto">
        Offers Available for limited period....Hurry Up
      </div>
      <div
        className={`flex justify-between items-center h-[75px]  bg-[#231535] text-white px-10  font-Roboto`}
      >
        <div
          onClick={()=>router.push("/")}
          style={{ cursor: "pointer" }}
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          {Menus.Logo}
        </div>
        <div className="flex gap-10 items-center">
          <div className="lg:flex hidden gap-10 items-center">
            {navbuttons?.map((navitem) => {
              return (
                <>
                  <h2
                    key={navitem.label}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleNavigation(navitem.target)}
                  >
                    {navitem.label}
                  </h2>
                </>
              );
            })}
          </div>
          <div className="hidden sm:flex gap-5">
            <h2>
              <button className="button-primary">
                <MdCall />
                Call Us
              </button>
            </h2>
            <h2>
              <button
                className="button-primary"
                onClick={() => router.push("/admin")}
              >
                <RiAdminFill />
                Admin
              </button>
            </h2>
          </div>
          <h2 className="lg:hidden">
            <button
              className="text-[25px] p-1"
              onClick={() => {
                setHamburger(!Hamburger);
              }}
            >
              <GiHamburgerMenu />
            </button>
          </h2>
        </div>
      </div>
      {Hamburger && (
        <div
          className={`flex justify-center h-auto bg-[#231535] text-white px-10  font-Roboto pb-[10px]`}
        >
          <div className="flex flex-col items-center gap-[20px]">
            <div className="sm:hidden flex  gap-5">
              <h2>
                <button className="button-primary">
                  <MdCall />
                  Call Us
                </button>
              </h2>
              <h2>
                <button
                  className="button-primary"
                  onClick={() => {
                    router.push("/admin");
                    setHamburger(!Hamburger);
                  }}
                >
                  <RiAdminFill />
                  Admin
                </button>
              </h2>
            </div>
            <div className="flex flex-col gap-[5px] items-center">
              {navbuttons?.map((navitem) => {
                return (
                  <>
                    <h2
                      key={navitem.label}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleNavigation(navitem.target)}
                    >
                      {navitem.label}
                    </h2>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
