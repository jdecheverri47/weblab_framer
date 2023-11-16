"use client";
import { motion, useScroll } from "framer-motion";

function FirstSection() {
  const { scrollYProgress } = useScroll();
  return (
    <section className="overflow-hidden h-screen">
      <div className="circle overflow-hidden"/>
      <div className="flex flex-col justify-center items-center h-full w-screen">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-bold text-5xl xl:text-8xl xl:max-w-5xl text-center gradient_text xl:h-[7rem]"
        >
          Designing the Future
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-bold text-5xl xl:text-8xl  xl:max-w-4xl text-center"
        >
          of the Web
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="xl:text-2xl text-center mt-4 xl:max-w-3xl text-[#BFB1E3] text-md px-5"
        >
          We build the best websites and apps for your business, ensuring a
          seamless blend of functionality, aesthetics, and user experience that
          sets you apart in the digital landscape.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2 }}
          className="text-white font-bold xl:px-10 xl:py-4 rounded-full xl:mt-8 gradient hover:text-opacity-60 transition-all duration-300 ease-in-out px-8 py-3 mt-6 text-sm"
        >
          Book a Call
        </motion.button>
      </div>
    </section>
  );
}

export default FirstSection;
