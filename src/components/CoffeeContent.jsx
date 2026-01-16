import React from "react";
import { MoveRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const CoffeeContent = () => {
  const navigate = useNavigate()
  const signupLoc = (e) => {
    navigate ("/more")
    
  } 
  return (
    <div className="flex flex-col  md:flex-row md:gap-y-15 lg:gap-y-20 lg:flex-row flex-wrap ">
      <div className="flex justify-center object-cover items-center md:w-1/2 lg:w-1/2 xl:max-h-100  overflow-hidden">
        <img className="object-cover  "
          src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-105422.jpg"
          alt=""
        />
      </div>
      <div className="bg-[#f4f0ea] flex flex-col justify-center items-center py-5  md:w-1/2 lg:w-1/2 ">
        <h1 className="font-medium text-xl md:text-3xl lg:text-4xl text-[#206246] pb-2 md:pb-4 lg:pb-6">
          Hello, pistachio
        </h1>
        <p className="items-center flex flex-col font-medium md:text-lg lg:text-xl md:pb-2 lg:pb-4 text-[#206246]">
          A beloved flavor is back with the delicious <br />{" "}
          <span>new Pistachio Cortado, Pistachio cafe</span>
        </p>
        <a href="https://www.starbucks.com/">
        <button className="flex gap-5 text-lg bg-red-600 text-white rounded-lg justify-center p-2 mt-5  lg:p-3  mb-5 cursor-pointer group hover:opacity-90 active:scale-90">
         Explore Pistachio
          <MoveRight className="hidden h-auto lg:inline-block mt-1 group-hover:translate-x-2 transition" />
        </button>{" "}
        </a>
      </div>
      <div className=" flex   md:hidden lg:hidden justify-center object-cover items-center ">
        <img
          className="w-full  object-cover"
          src="https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-center items-center py-5 md:w-1/2 lg:w-1/2 bg-[#326d54] ">
        <h1 className="font-medium text-xl md:text-3xl lg:text-4xl text-white pb-2 md:pb-4 lg:pb-6">
          But first, free coffee
        </h1>
        <p className="items-center flex flex-col font-medium md:text-lg lg:text-xl md:pb-2 lg:pb-4 text-white">
          A free handcrafted drink with purchase is all yours <br />{" "}
          <span> during your first week as a Starbucks®</span>
        </p>
        <a href="https://www.starbucks.com/">
        <button className="flex gap-5 text-lg border-1 outline-0 text-white font-medium rounded-lg justify-center p-2 mt-5  lg:p-3  mb-5 cursor-pointer group hover:opacity-90 active:scale-90">
          Explore StarBuck's
        <MoveRight className="hidden lg:inline-block mt-1 group-hover:translate-x-2 transition" />
        </button>{" "}
        </a>
      </div>
      <div className=" hidden md:flex lg:flex justify-center object-cover items-center md:w-1/2 lg:w-1/2 xl:max-h-100  overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex justify-center object-cover items-center md:w-1/2 lg:w-1/2 ">
        <img
          src="https://plus.unsplash.com/premium_photo-1726877188500-391727fe97db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8"
          alt=""
        />
      </div>
      <div className="bg-[#f4f0ea] flex flex-col justify-center items-center py-5  md:w-1/2 lg:w-1/2 ">
        <h1 className="font-medium text-xl md:text-3xl lg:text-4xl text-[#206246] pb-2  md:pb-4 lg:pb-6">
          Grab a seat. Get free refills.
        </h1>
        <p className="items-center flex flex-col font-medium md:text-lg lg:text-xl md:pb-2 lg:pb-4 text-[#206246]">
          A beloved flavor is back with the delicious <br />{" "}
          <span>new Pistachio Cortado, Pistachio cafe</span>
        </p>
        <a href="https://www.starbucks.com/">
        <button className="flex gap-5 text-lg bg-red-600 text-white rounded-lg justify-center p-2 mt-5  lg:p-3  mb-5 cursor-pointer group hover:opacity-90 active:scale-90">
          Visit Shop
          <MoveRight className="hidden h-auto lg:inline-block mt-1 group-hover:translate-x-2 transition" />
        </button>{" "}
        </a>
      </div>
      <div className=" flex   md:hidden lg:hidden justify-center object-cover items-center ">
        <img
          className="w-full  object-cover"
          src="https://images.unsplash.com/photo-1675864490061-30cfc9b256b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RhcmJ1Y2tzJTIwY29mZmVlJTIwZHJpbmtpbmd8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-center items-center py-5 md:w-1/2 lg:w-1/2 bg-[#326d54] ">
        <h1 className="font-medium text-xl md:text-2xl lg:text-4xl text-white pb-2 md:pb-4 lg:pb-6">
          Nondairy choices. No  charge
        </h1>
        <p className="items-center flex flex-col font-medium md:flex-wrap md:text-lg lg:text-xl md:pb-2 lg:pb-4 text-white">
          When you stay to enjoy your favorite beverage in <br />{" "}
          <span> the café, refills of hot and iced with us.</span>
        </p>
        
        <button onClick={signupLoc} className="flex gap-5 text-lg border-1 outline-0 text-white font-medium rounded-lg justify-center p-2 mt-5  lg:p-3  mb-5 cursor-pointer group hover:opacity-90 active:scale-90">
          JoinUs Now
          <MoveRight className="hidden lg:inline-block mt-1 group-hover:translate-x-2 transition" />
        </button>{" "}
       
      </div>
      <div className=" hidden md:flex lg:flex justify-center object-cover items-center md:w-1/2 lg:w-1/2 xl:max-h-100  overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1675864490061-30cfc9b256b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RhcmJ1Y2tzJTIwY29mZmVlJTIwZHJpbmtpbmd8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default CoffeeContent;
