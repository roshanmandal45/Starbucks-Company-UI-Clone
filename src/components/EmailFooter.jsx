import { useScroll } from "framer-motion";
import React, { useState } from "react";

const EmailFooter = () => {
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("Thank you for signing up!");
    console.log(data);
    setData("");
  };
  return (
    <div className="py-2 md:py-5 lg:py-10 ">
      <div className="flex justify-center items-center    ">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex gap-x-2 md:gap-x-4 lg:gap-x-8 "
          action=""
        >
          <input
          required
            className="bg-white text-black outline-0 md:w-80 lg:w-110 md:p-2 lg:p-2"
            type="text"
            placeholder="Email Address"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button  className="font-medium md:font-bold lg:font-bold lg:hover:text-700 active:scale-90">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailFooter;
