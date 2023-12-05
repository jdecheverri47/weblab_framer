import Image from "next/image";
import { useRef, useLayoutEffect, useEffect } from "react";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import androidPhone from "../../public/images/android_mockup.png";
import iphoneMockup from "../../public/images/iphone_mockup.png";

function PurpleCard() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.set(secondText.current, {
      left: secondText.current.getBoundingClientRect().width,
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.03 * direction;
  };

  const containerRef = useRef();
  const androidRef = useRef();
  const iosRef = useRef();

  useLayoutEffect(() => {
    const container = containerRef.current;
    const android = androidRef.current;
    const ios = iosRef.current;
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(android, { xPercent: 8, scale: 1.1, duration: 2 }, 0);
      tl.to(ios, { xPercent: -12, scale: 1.1, duration: 2 }, 0);

      ScrollTrigger.create({
        animation: tl,
        trigger: container,
        start: "top center",
        end: "+=300",
        scrub: 1,
        anticipatePin: 1,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -80, y: 80 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 1 }}
      className="bg-[#1f1f1f] p-1 rounded-[20px] shadow-lg"
    >
      <div className="md:w-[45rem] h-[25rem] card purple overflow-hidden ">
        <div className="pt-8 px-8">
          <h3 className="font-bold text-3xl">
            Any Platform, Every Possibility
          </h3>
          <p className="text-white">
            Our versatile development team brings your vision to life on any
            device, any operating system, without limits.
          </p>
        </div>
        <div
          className="md:pt-5 pt-3 flex w-full md:gap-8 relative"
          ref={containerRef}
        >
          <div className="slider mt-[6rem]" >
            <p ref={firstText}>• IOS • ANDROID&nbsp; </p>
            <p ref={secondText}>• IOS • ANDROID&nbsp;</p>
          </div>

          <Image
            alt=""
            src={androidPhone}
            className="lg:w-[10vw] w-[80%] rotate-12 absolute left-1 xl:w-[55%]  pt-4 "
            ref={androidRef}
          />
          <Image
            alt=""
            src={iphoneMockup}
            height={2048}
            width={831}
            className="lg:w-[10vw] w-[40%] rotate-12 absolute lg:right-12 right-14 xl:w-[30%] xl:right-[6rem] pt-5"
            ref={iosRef}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default PurpleCard;
