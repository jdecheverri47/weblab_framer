"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function PricingSection() {
  return (
    <section className="pt-[8rem] overflow-x-hidden" id="pricing">
      <div>
        <div className="flex flex-col justify-center items-start md:items-center h-full px-8">
          {/* <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="gradient_text text-2xl md:text-3xl font-bold xl:text-4xl"
          >
            Pricing
          </motion.h3> */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-4xl md:text-5xl font-bold mt-5 xl:text-7xl"
          >
            <strong>Custom</strong> Pricing, <strong>Your</strong> Way!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-xl md:text-2xl lg:text-center mt-2 md:max-w-3xl text-[#BFB1E3]"
          >
            We offer a variety of pricing options to fit your specific needs.
          </motion.p>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center gap-8 pt-10 px-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="card bg-white w-[85%] h-[28.5rem] md:w-[24rem] md:h-[30rem] px-6"
          >
            <div className="pt-6">
              <h2 className="font-medium text-2xl text-[#222222]">
                Website Pro Builder
              </h2>
              <p className="text-gray-500 text-xl">
                Build your own website with our team of experts.
              </p>
            </div>
            <div className="py-3 md:py-4">
              <h1 className="text-blue-500 text-5xl md:text-6xl font-bold font-sans">
                $ 1499
              </h1>
            </div>

            <div className="pt-2 md:pt-4">
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">UI/UX Design</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">3 Revisions Over Design</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">Landing Page Website</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">Responsive Design</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">
                  Domain Registration Included
                </p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">SSL Certificate</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">SEO Optimization</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="text-white hover:bg-blue-500  font-bold w-full py-2.5 rounded-[18px] mt-5 gradient_button hover:text-opacity-60 transition-all duration-300 ease-in-out">
                Get now!
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="card bg-white w-[85%] h-[30rem] md:w-[24rem] px-3"
          >
            <div className="pt-6 px-3">
              <h2 className="font-medium text-2xl text-[#222222]">FlexiPlan</h2>
              <p className="text-gray-500 text-xl">
                The perfect fit if you need a web/mobile app, or a bigger
                project.
              </p>
            </div>
            <div className="py-3 px-2">
              <h1 className="text-blue-500 text-5xl md:text-6xl font-bold font-sans">
                Contact Us
              </h1>
            </div>

            <div className="pt-2 md:pt-4 px-3">
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">24/7 Assistance</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">
                  Dedicated Project Manager
                </p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">Open to Negotiate</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">Personal Direct Contact</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">Custom Quote System</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">
                  Flexible Payment Options
                </p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">
                  Comprehensive Consultation
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center px-2">
              <a className="text-white hover:bg-blue-500  font-bold w-full py-2.5 rounded-[18px] mt-5 md:mt-8 gradient_button hover:text-opacity-60 transition-all duration-300 ease-in-out" href="#contact">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
