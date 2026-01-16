import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const TransitionCon = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-10 p-10"
    >
      <motion.div
        variants={item}
        className=" flex justify-center   flex-col items-center "
      >
        <div className="bg-[#326d54] w-[90%] md:w-auto lg:w-auto  p-10 rounded-lg flex-col  md:flex md:flex-row lg:flex lg:flex-row gap-10 text-white">
          <div className="mb-2 md:mb-0 lg-mb-0">
            <h1 className=" text-lg md:text-2xl lg:text-3xl md:mb-2  lg:mb-3 font-medium ">5 Million+</h1>
            <p>App Downloads</p>
          </div>
          <div className="lg:border-l-2 md:border-l-2 md:pl-4 lg:pl-5 mb-2 md:mb-0 lg-mb-0">
            <h1 className="text-lg md:text-2xl lg:text-3xl md:mb-2  lg:mb-3 font-medium">150,000+</h1>
            <p>Daily Coffe's/Drinkers</p>
          </div>
          <div>
            <h1 className="text-lg md:text-2xl lg:text-3xl md:mb-2  lg:mb-3  font-medium">10,000,000+</h1>
            <p>Lives impacted</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={item} className="p-5 items-center">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl text-black   font-medium mb-6">
            <span className="text-green-100">Build</span>{" "}
            <span className="text-green-200">your</span>{" "}
            <span className="text-green-300">future,</span>{" "}
            <span className="text-green-400"> one </span>{" "}
            <span className="text-green-500">cup </span>{" "}
            <span className="text-green-600"> at </span>{" "}
            <span className="text-green-900"> a time.</span>{" "}
          </h1>
          <p className="text-lg text-gray-800">
            A perfect cup of coffee can turn even the quietest moment into something special
          </p>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <div className="flex justify-center items-center ">
          <button className="flex gap-5 text-lg bg-red-600 text-white rounded-lg justify-center p-3 mb-5 cursor-pointer group hover:opacity-90 active:scale-95">
            Start Exploring
            <MoveRight className="mt-1 group-hover:translate-x-2 transition" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TransitionCon;
