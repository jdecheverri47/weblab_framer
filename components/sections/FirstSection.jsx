"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FirstSection() {
  const titleRef = useRef();
  const sectionRef = useRef();

  // useEffect(() => {
  //   const title = titleRef.current;
  //   const section = sectionRef.current;
  //   let ctx = gsap.context(() => {
  //     const tl = gsap.timeline();
  //     tl.fromTo(title, {opacity: 1, duration: 2}, {opacity: 0, duration: 2})
  //     // tl.from(right, {xPercent: 100, duration: 2})

  //     ScrollTrigger.create({
  //       animation: tl,
  //       trigger: section,
  //       start: "top top",
  //       end: "+=400",
  //       scrub: 1,
  //       pin: true,
  //       pinSpacing: true,
  //       anticipatePin: 1,
  //       // markers: true,
  //     })
  //   }, section);

  //   return () => {
  //     ctx.revert();
  //   }
  // }, [])

  return (
    <section className="overflow-hidden h-screen" ref={sectionRef} id="home">
      <div className="circle overflow-hidden" />
      <div className="flex flex-col justify-center items-center h-full w-screen">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-bold 2xl:text-9xl 2xl:max-w-7xl text-center gradient_text 2xl:h-[8.3rem] xl:text-8xl xl:h-[7.5rem] lg:text-7xl lg:h-[6.5rem] md:text-6xl md:h-[5.5rem] sm:text-5xl sm:h-[4.5rem] text-6xl h-[7rem]"
        >
          Designing the Future
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-bold text-6xl 2xl:text-9xl  2xl:max-w-4xl text-center xl:text-8xl xl:h-[7.5rem] lg:text-7xl lg:h-[6.5rem] md:text-6xl md:h-[5.5rem] sm:text-5xl sm:h-[4.5rem] h-[4rem] "
        >
          of the Web
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="xl:text-2xl text-center lg:mt-4 xl:max-w-3xl text-[#BFB1E3] text-lg px-5"
        >
          We build the best websites and apps for your business.
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
