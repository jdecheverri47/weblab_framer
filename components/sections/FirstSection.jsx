"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FirstSection() {
  const titleRef = useRef();
  const sectionRef = useRef();
  const circleRef = useRef();

  useLayoutEffect(() => {
    const title = titleRef.current;
    const section = sectionRef.current;
    const circle = circleRef.current;
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        circle,
        { opacity: 1},
        { opacity: 0}
      );
      tl.fromTo(
        title,
        { y: 0, opacity: 1 },
        { y: -100, opacity: 0, scale: 0.7 },
        0
      );

      ScrollTrigger.create({
        animation: tl,
        trigger: section,
        start: "top top",
        end: "+=1000",
        pin: true,
        pinSpacer: true, 
        scrub: 1,
        markers: false,
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="overflow-hidden h-screen relative" ref={sectionRef} id="home">
      <div className="w-full h-full absolute">
        <div className="circle overflow-x-hidden" ref={circleRef} />
      </div>
      <div
        className="flex flex-col justify-center items-center h-full w-screen lg:px-20 absolute z-100"
        ref={titleRef}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="tracking-tighter font-bold 2xl:text-9xl 2xl:max-w-8xl text-center 2xl:h-[8.5rem] xl:text-8xl xl:h-[7.5rem] lg:text-7xl lg:h-[6.5rem] md:text-6xl md:h-[5.5rem] sm:text-5xl sm:h-[4.5rem] text-6xl h-[7rem] gradient_text pr-2"
        >
          Designing the Future
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-bold text-6xl 2xl:text-9xl  2xl:max-w-4xl text-center xl:text-8xl xl:h-[7.5rem] lg:text-7xl lg:h-[6.5rem] md:text-6xl md:h-[5.5rem] sm:text-5xl sm:h-[4.5rem] h-[4rem] tracking-tighter"
        >
          of the Web
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="xl:text-3xl text-center lg:mt-4 xl:max-w-3xl text-[#ffffff] text-lg tracking-tighter"
        >
          We build the best websites and apps for your business.
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="text-white lg:px-9 lg:py-3 rounded-lg gradient_button_navbar hover:text-opacity-60 transition-all duration-300 ease-in-out lg:text-xl tracking-tighter lg:mt-10 text-lg mt-4 py-2 px-4 button_font"
          href="#pricing"
        >
          Get started
        </motion.a>
      </div>
    </section>
  );
}

export default FirstSection;
