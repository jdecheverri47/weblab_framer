import Image from "next/image";

function ThirdSection() {
  return (
    <section className="pt-10">
      <div className="lg:px-[10vw] px-5 flex flex-col justify-center md:items-center items-start pt-10">
        <h3 className="gradient_bullet_text text-3xl font-bold text-center">Services</h3>
        <h2 className="text-5xl md:text-center font-bold mt-8">
          Where Technology Meets Creativity
        </h2>
        <p className="max-w-2xl md:text-center text-xl pt-5 ">
          We specialize in crafting bespoke websites, intuitive web
          applications, and innovative mobile apps, each designed to elevate
          your digital presence with unmatched functionality and aesthetic
          appeal.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 flex flex-col gap-4 md:w-[70%] lg:w-[75%] justify-center items-center pt-10 px-5 lg:px-10 lg:mx-auto lg:gap-0">
        <div className="card_services lg:mx-auto">
          <div className="py-4 h-full">
            <div className="px-6 h-[5rem] flex justify-center items-center">
              <h2 className="text-2xl font-semibold">
                Websites Design and Development
              </h2>
            </div>
            <div className="w-full h-[12rem] overflow-hidden">
              <Image alt="" src='/images/Figma_design.png' width={3585} height={2240} className="object-cover"/>
            </div>
            <div className="py-3 px-6">
              <p className="text-xl">
                We design and develop websites that are not only visually
                compelling, but have the functionality and advanced programming
                to deliver leads, clients and revenues.
              </p>
            </div>
          </div>
        </div>
        <div className="card_services lg:mx-auto">
          <div className="py-4">
            <div className="px-6 h-[5rem] flex justify-center items-center">
              <h2 className="text-2xl font-semibold ">
                Web Applications Development
              </h2>
            </div>
            <div className="w-full h-[12rem] overflow-hidden">
              <Image alt="" src='/images/web_app.png' width={1600} height={1200} className="object-cover" />
            </div>
            <div className="px-6 pt-3">
              <p className="text-xl">
                We create web applications that go beyond aesthetic allure,
                embedding advanced functionality and innovative programming to
                not only captivate users but also drive engagement, efficiency,
                and business growth.
              </p>
            </div>
          </div>
        </div>
        <div className="card_services lg:mx-auto">
          <div className="py-4 ">
            <div className="px-6 h-[5rem] flex justify-start  items-center">
              <h2 className="text-2xl font-semibold">Mobile Apps Development</h2>
            </div>
            <div className="w-full h-[12rem] overflow-hidden">
              <Image alt="" src='/images/mobile_design.png' width={1600} height={1200} className="object-cover"/>
            </div>
            <div className="px-6 pt-3">
              <p className="text-xl">
                We engineer mobile applications that blend striking design with
                robust functionality, tailored to enhance user experience while
                driving effective engagement and fostering business success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
