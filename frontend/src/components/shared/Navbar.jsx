import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react"; // Menu and close icons

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 flex justify-between items-center px-6 h-20 border-b-2 bg-white">
      {/* Logo */}
      <p className="font-sans text-blue-500 text-3xl">
        <span className="text-red-500">Sci</span>-Astra
      </p>

      {/* Desktop Menu */}
      <ul className="hidden text-nowrap md:flex items-center justify-between text-lg w-[60%]">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-500 text-blue-500 "
                : "text-gray-500 hover:text-blue-500 px-2"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/courses"}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-500 text-blue-500 "
                : "text-gray-500 hover:text-blue-500 "
            }
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/blogs"}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-500 text-blue-500 "
                : "text-gray-500 hover:text-blue-500 "
            }
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-500 text-blue-500 "
                : "text-gray-500 hover:text-blue-500 "
            }
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-500 text-blue-500 "
                : "text-gray-500 hover:text-blue-500 "
            }
          >
            Contact Us
          </NavLink>
        </li>

        <li className="md:ms-2">
          <Button
            className="bg-blue-500 hover:bg-blue-400"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t-2 flex flex-col items-center space-y-4 py-4 shadow-lg md:hidden">
          <NavLink to={"/"} onClick={toggleMenu} className="text-lg">
            Home
          </NavLink>
          <NavLink to={"/courses"} onClick={toggleMenu} className="text-lg">
            Course
          </NavLink>
          <NavLink to={"/blogs"} onClick={toggleMenu} className="text-lg">
            Blogs
          </NavLink>
          <NavLink to={"/contact"} onClick={toggleMenu} className="text-lg">
            Contact Us
          </NavLink>
          <NavLink to={"/about"} onClick={toggleMenu} className="text-lg">
            About us
          </NavLink>
          <Button
            className="bg-blue-500 hover:bg-blue-400 mt-2"
            onClick={() => {
              navigate("/login");
              toggleMenu();
            }}
          >
            Login
          </Button>
        </div>
      )}
    </nav>
  );
};
