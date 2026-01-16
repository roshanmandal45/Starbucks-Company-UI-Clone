import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const goToMore = (e) => {
    setNav(false);

    navigate("/more");

    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap justify-between text-white bg-[#326d54] max-w-screen  items-center  shadow-acernity px-4 py-2 max-h-14">
      <div className="flex items-center  space-x-2">
        <img
          className=" ml-9 w-12 h-10 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Logo"
        />
        <h1 className="text-white font-bold text-lg">StarBuck'S</h1>
      </div>

      <div className="hidden lg:flex flex-wrap gap-4 md:gap-10 mt-2 md:mt-0">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `font-bold ${
              isActive
                ? "border-b-2 hover:border-red-600 transition-colors duration-300 active:scale-90"
                : " border-b-2 border-transparent hover:border-b-2 hover:border-red-600 transition-colors duration-300"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `font-bold ${
              isActive
                ? "border-b-2 hover:border-red-600 transition-colors duration-300 active:scale-90"
                : " border-b-2 border-transparent hover:border-b-2 hover:border-red-600 transition-colors duration-300"
            }`
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            `font-bold ${
              isActive
                ? "border-b-2 hover:border-red-600 transition-colors duration-300 "
                : " border-b-2 border-transparent hover:border-b-2 hover:border-red-600 transition-colors duration-300"
            }`
          }
        >
          Rewards
        </NavLink>
        <NavLink
          to="/testimonial"
          className={({ isActive }) =>
            `font-bold ${
              isActive
                ? "border-b-2 hover:border-red-600 transition-colors duration-300 "
                : " border-b-2 border-transparent hover:border-b-2 hover:border-red-600 transition-colors duration-300"
            }`
          }
        >
          Gift Cards
        </NavLink>

        <NavLink
          to="/more"
          className={({ isActive }) =>
            `font-bold ${
              isActive
                ? "border-b-2 hover:border-red-600 transition-colors duration-300 "
                : " border-b-2 border-transparent hover:border-b-2 hover:border-red-600 transition-colors duration-300"
            }`
          }
        >
          More
        </NavLink>
      </div>

      <button
        onClick={goToMore}
        className="bg-blue-700 cursor-pointer text-white p-2 mr-5 hidden lg:flex rounded-2xl text-shadow-lg shadow-sm active:scale-95"
      >
        SignUp Now
      </button>

      <div className="lg:hidden px-6">
        <button
          onClick={() => setNav(!nav)}
          className="cursor-pointer active:scale-95"
          aria-expanded={nav}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {nav && (
        <div className="w-full lg:hidden mt-2 px-4">
          <div className="flex flex-col gap-3 bg-white text-black border rounded-md p-4 shadow">
            <NavLink
              onClick={() => setNav(false)}
              to="/"
              className={({ isActive }) =>
                ` ${isActive ? "border-b-2 w-12 font-bold" : "border-b-0 "}`
              }
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setNav(false)}
              to="/services"
              className={({ isActive }) =>
                ` ${isActive ? "border-b-2 w-12 font-bold" : ""}`
              }
            >
              Menu
            </NavLink>
            <NavLink
              onClick={() => setNav(false)}
              to="/blogs"
              className={({ isActive }) =>
                ` ${isActive ? "border-b-2 w-12 font-bold" : ""}`
              }
            >
              Rewards
            </NavLink>
            <NavLink
              onClick={() => setNav(false)}
              to="/testimonial"
              className={({ isActive }) =>
                ` ${isActive ? "border-b-2 w-20 font-bold" : ""}`
              }
            >
              Gift Cards
            </NavLink>
            <NavLink
              onClick={() => setNav(false)}
              to="/more"
              className={({ isActive }) =>
                ` ${isActive ? "border-b-2 w-12 font-bold" : ""}`
              }
            >
              More
            </NavLink>

            <button
              onClick={goToMore}
              className="mt-2 bg-blue-700 text-white p-2 rounded-2xl"
            >
              SignUp Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
