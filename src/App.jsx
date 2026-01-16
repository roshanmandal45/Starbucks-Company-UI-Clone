import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TransitionCon from "./components/TransitionCon";
import CoffeeContent from "./components/CoffeeContent";
import Footer from "./components/Footer";
import NavLink from "./Navigation/NavLink";
import { Route,  Routes } from "react-router-dom";
import Home from "./Navigation/Home";
import Services from "./Navigation/Services";
import { useLocation } from "react-router-dom";
import Blogs from "./Navigation/Blogs";
import Testimonial from "./Navigation/Testimonial";
import More from "./Navigation/More";
import GlobalScrolltop from "./Navigation/GlobalScrolltop";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isSerivce = location.pathname === "/services"
  
  return (
    <>
    <GlobalScrolltop/>
    <Navbar />
   
        <div className="min-h-screen w-full bg-gradient-to-b from-[#326d54] via-[#c5e1d5]  to-[#326d54] text-white overflow-x-hidden">

    <Routes>
    <Route path="/" element={<Home/>}  />
    <Route path="/sevices" element={<Services/>}  />
    <Route path="/blogs" element={<Blogs/>}  />
    <Route path="/testimonial" element={<Testimonial/>}  />
    <Route path="/more" element={<More/>}  />

    </Routes>
      {isHome && (
        <>
        <Hero />
      <TransitionCon />
      <CoffeeContent/>
        </>
      )}
      {isSerivce && (
        <>
        <Services/>
        </>
      )}
      
      
    
       
      <Footer/>
      
    </div>
    
    </>

  );
};

export default App;
