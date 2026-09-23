import { IoMdHome } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";


export const navItems = [
  {
    title: "Home",
    href: "/",
    icon: <IoMdHome />
  },
  {
    title: "Location",
    href: "/location",
    icon: <FaLocationDot />
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <IoMdSettings />
  },
  {
    title: "About",
    href: "/about",
    icon: <FaInfoCircle />
  }
];
