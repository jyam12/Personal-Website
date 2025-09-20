import { React, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { Link } from "react-router-dom";

import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";

import {
  MdOutlineWorkHistory,
  MdOutlineSchool,
  MdLightbulbOutline,
  MdOutlineContactPage,
} from "react-icons/md";

const Navbar = () => {
  // Navigation links data
  const navigation = [
    {
      logo: "AiOutlineHome",
      name: "Home",
      href: "/Personal-Website",
      current: true,
    },
    {
      logo: "AiOutlineUser",
      name: "About",
      href: "/Personal-Website/about",
      current: true,
    },
    {
      logo: "MdOutlineSchool",
      name: "Education",
      href: "/Personal-Website/education",
      current: false,
    },
    {
      logo: "MdOutlineWorkHistory",
      name: "Experience",
      href: "/Personal-Website/experience",
      current: false,
    },
    {
      logo: "AiOutlineProject",
      name: "Projects",
      href: "/Personal-Website/projects",
      current: false,
    },
    {
      logo: "MdLightbulbOutline",
      name: "Skills",
      href: "/Personal-Website/skills",
      current: false,
    },
    {
      logo: "MdOutlineContactPage",
      name: "Contact",
      href: "/Personal-Website/contact",
      current: false,
    },
  ];

  const iconMap = {
    AiOutlineHome: AiOutlineHome,
    AiOutlineUser: AiOutlineUser,
    AiOutlineProject: AiOutlineProject,
    MdOutlineWorkHistory: MdOutlineWorkHistory,
    MdOutlineSchool: MdOutlineSchool,
    MdLightbulbOutline: MdLightbulbOutline,
    MdOutlineContactPage: MdOutlineContactPage,
  };
  // Helper function to conditionally apply CSS classes
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [NavBarBgColor, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    // It provides the `open` state which we use to toggle the mobile menu icon.
    <Disclosure
      as="nav"
      className={classNames(
        NavBarBgColor ? "bg-navbar/60 backdrop-blur-lg " : "bg-transparent",
        "sticky top-0 w-full transition-all duration-300 ease-out"
      )}
    >
      {({ open }) => (
        <>
          {/* Main container for the navbar content */}
          <div className="px-4 sm:px-6 lg:px-10">
            <div className="flex flex-row-reverse h-16 items-center justify-between">
              <div className="flex items-center">
                {/* Desktop navigation links (hidden on small screens) */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-5">
                    {navigation.map((item) => {
                      const isCurrent = location.pathname === item.href;
                      const Icon = iconMap[item.logo];
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={
                            "flex items-center py-1 lg:text-xl text-sm font-medium relative text-gray-300 transition-colors duration-300 ease-out link-underline-accent"
                          }
                          aria-current={isCurrent ? "page" : undefined}
                        >
                          {Icon && <Icon className="mr-2 h-5 w-5" />}
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Mobile menu button (visible on small screens) */}
              <div className="-mr-2 flex sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-accent hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile menu panel, shown/hidden by Headless UI */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const Icon = iconMap[item.logo];
                return (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "flex rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {Icon && <Icon className="mr-2 h-5 w-5" />}
                    {item.name}
                  </DisclosureButton>
                );
              })}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
