import React from "react";
import Home from "./Home";
import Services from "./Services";
import Blogs from "./Blogs";
import Testimonial from "./Testimonial";
import More from "./More";
import { useLocation } from "react-router-dom";

const NavLink = () => {
  return (
    <div>
      <Services />
      <Blogs />

      <Testimonial />
      <More />
    </div>
  );
};

export default NavLink;
