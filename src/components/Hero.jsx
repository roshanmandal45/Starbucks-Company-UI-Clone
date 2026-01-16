import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className=" w-full lg:w-1/2 flex flex-col  py-30 items-center">
        <h1 className="text-2xl  md:text-3xl   lg:text-4xl  font-bold text-[#280004]">
          Welcome to StarBuck'S
        </h1>
        <p className="text-lg  mt-4 text-center text-[#280004] px-10">
          Experience the finest coffee blends and delightful treats at
          StarBuck'S. Your perfect cup awaits!
        </p>
        <button className="mt-10 bg-blue-700 text-white px-6 py-2 rounded-2xl shadow-lg shadow-blue-100  cursor-pointer active:scale-95">
          Get Started
        </button>
        <div className="mt-05">
          <h1 className=" text-2xl font-bold px-20 md:px-40  lg:px-50 py-10  text-[#280004] ">
            Trending Coffee'S
          </h1>
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-3 md:overflow-hidden">
              <div className="relative group cursor-pointer">
                <img
                  className="w-20 h-20 lg:w-30 lg:h-30 rounded-full object-cover inline-block mx-2 transition-transform duration-300 group-hover:scale-140 cursor-pointer"
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Caffecino"
                />
                <div className="absolute p inset-0 rounded-full  bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gray-600 text-sm lg:mt-38 lg:pt-10 xl:pt-10 font-bold ">
                    Caffecino
                  </span>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <img
                  className="w-20 h-20 lg:w-30 lg:h-30 rounded-full object-cover inline-block mx-2 transition-transform duration-300 group-hover:scale-140 cursor-pointer"
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Latte"
                />
                <div className="absolute inset-0 rounded-full bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gray-700 text-sm  lg:mt-38 lg:pt-10 xl:pt-10 font-bold">Latte</span>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <img
                  className="w-20 h-20 lg:w-30 lg:h-30 rounded-full object-cover inline-block mx-2 transition-transform duration-300 group-hover:scale-140 cursor-pointer"
                  src="https://images.unsplash.com/photo-1595509449541-0a4f447157be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXJidWNrcyUyMGNvZmZlc3N8ZW58MHx8MHx8fDA%3D"
                  alt="Mocha"
                />
                <div className="absolute inset-0 rounded-full  bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gray-800  text-sm  lg:mt-38 lg:pt-10 xl:pt-10 font-bold">Mocha</span>
                </div>
              </div>

              <div className="relative group">
                <img
                  className="w-20 h-20 lg:w-30 lg:h-30 rounded-full object-cover inline-block mx-2 transition-transform duration-300 group-hover:scale-140 cursor-pointer"
                  src="https://images.unsplash.com/photo-1657363159609-0a7b9a46ef17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXJidWNrcyUyMGNvZmZlc3N8ZW58MHx8MHx8fDA%3D"
                  alt="Espresso"
                />
                <div className="absolute inset-0 rounded-full bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gray-900 text-sm   lg:mt-38 lg:pt-10 xl:pt-10 font-bold">
                    Espresso
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2  min-h-auto">
        <img
          className="h-[90%] object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1637290742802-3c8a0f5bd49b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
