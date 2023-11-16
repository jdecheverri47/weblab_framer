import Image from "next/image";

function PricingSection() {
  return (
    <section className="pt-10">
      <div>
        <div className="flex flex-col justify-center items-start md:items-center h-full px-8">
          <h3 className="gradient_bullet_text text-2xl md:text-3xl font-bold">Pricing</h3>
          <h2 className="text-4xl md:text-5xl font-bold mt-5">Custom Pricing, Your Way!</h2>
          <p className="text-xl md:text-2xl lg:text-center mt-4 md:max-w-3xl text-[#BFB1E3]">
            We offer a variety of pricing options to fit your specific needs.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center gap-8 pt-10 px-5">
          <div className="card bg-white w-[85%] h-[28.5rem] md:w-[24rem] md:h-[35rem] px-6">
            <div className="pt-6">
              <h2 className="font-medium text-2xl text-[#222222]">
                Website Pro Builder
              </h2>
              <p className="text-gray-500 text-xl">
                Build your own website with our team of experts.
              </p>
            </div>
            <div className="py-3 md:py-6 ">
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
          </div>
          <div className="card bg-white w-[85%] h-[30rem] md:w-[24rem] px-3">
            <div className="pt-6 px-3">
              <h2 className="font-medium text-2xl text-[#222222]">
                FlexiPlan
              </h2>
              <p className="text-gray-500 text-xl">
                The perfect fit if you need a web/mobile app, or a bigger project.
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
                <p className="text-md text-gray-500">Dedicated Project Manager</p>
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
                <p className="text-md text-gray-500">
                Custom Quote System
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
                <p className="text-md text-gray-500">Flexible Payment Options</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Image
                  alt=""
                  src="/images/garrapata.png"
                  width={256}
                  height={256}
                  className="w-[1.2rem] h-[1.2rem]"
                />
                <p className="text-md text-gray-500">Comprehensive Consultation</p>
              </div>
            </div>
            <div className="flex justify-center items-center px-2">
              <button className="text-white hover:bg-blue-500  font-bold w-full py-2.5 rounded-[18px] mt-5 md:mt-8 gradient_button hover:text-opacity-60 transition-all duration-300 ease-in-out">
                Contact Us
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
