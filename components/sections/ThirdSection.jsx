"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function ThirdSection() {
  return (
    <section className="pt-12">
      <div className="lg:px-[10vw] px-8 flex flex-col justify-center md:items-center items-start pt-10">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="gradient_bullet_text text-2xl md:text-3xl font-bold text-center"
        >
          Services
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-4xl md:text-5xl md:text-center font-bold mt-8"
        >
          Where Technology Meets Creativity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="md:max-w-2xl md:text-center text-lg md:text-xl pt-2"
        >
          We specialize in crafting bespoke websites, intuitive web
          applications, and innovative mobile apps, each designed to elevate
          your digital presence with unmatched functionality and aesthetic
          appeal.
        </motion.p>
      </div>
      <div className="lg:grid lg:grid-cols-3 flex flex-col gap-4 md:w-[70%] lg:w-[75%] justify-center items-center pt-10 px-5 lg:px-10 lg:mx-auto lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="card_services lg:mx-auto"
        >
          <div className="py-2 h-full">
            <div className="px-6 h-[5rem] flex justify-center items-center">
              <h2 className="text-2xl font-semibold text-center lg:text-left">
                Websites Design and Development
              </h2>
            </div>
            <div className="w-full h-[12rem] overflow-hidden">
              <Image
                alt=""
                src="/images/Figma_design.png"
                width={3585}
                height={2240}
                className="object-cover"
              />
            </div>
            <div className="pt-3 px-6">
              <p className="text-sm lg:text-xl">
                We design and develop websites that are not only visually
                compelling, but have the functionality and advanced programming
                to deliver leads, clients and revenues.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="card_services lg:mx-auto"
        >
          <div className="py-2">
            <div className="px-6 pb-2 h-fit lg:h-[5rem] flex justify-center items-center">
              <h2 className="text-2xl font-semibold text-center lg:text-left ">
                Web Applications Development
              </h2>
            </div>
            <div className="w-full h-[12rem] overflow-hidden">
              <Image
                alt=""
                src="/images/web_app.png"
                width={1600}
                height={1200}
                className="object-cover"
              />
            </div>
            <div className="px-6 pt-3 pb-5">
              <p className="text-sm lg:text-xl">
                We create web applications that go beyond aesthetic allure,
                embedding advanced functionality and innovative programming to
                not only captivate users but also drive engagement, efficiency,
                and business growth.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2 }}
          className="card_services lg:mx-auto"
        >
          <div className="py-2 ">
            <div className="px-6 h-[5rem] flex justify-start  items-center">
              <h2 className="text-2xl font-semibold text-center">
                Mobile Apps Development
              </h2>
            </div>
            <div className="w-full h-[12rem] overflow-hidden">
              <Image
                alt=""
                src="/images/mobile_design.png"
                width={1600}
                height={1200}
                className="object-cover"
              />
            </div>
            <div className="px-6 pt-3">
              <p className="text-sm lg:text-xl">
                We engineer mobile applications that blend striking design with
                robust functionality, tailored to enhance user experience while
                driving effective engagement and fostering business success.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ThirdSection;
