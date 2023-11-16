import Image from "next/image";
import WindowMacOs from "../ui/WindowMacOs";

function SecondSection() {
  return (
    <section className="xl:h-[120vh] h-fit">
      <div>
        <div className="flex flex-col justify-center md:items-center items-start gap-4">
          <h3 className="gradient_bullet_text text-2xl xl:text-3xl font-bold pl-5">Benefits</h3>
          <h2 className="text-5xl font-bold md:text-center lg:mx-10 mx-5">
            Tailored Benefits for Your Web Needs
          </h2>
          <div className="md:grid md:grid-cols-2 flex flex-col md:gap-8 pt-5 lg:mx-10 mx-5 gap-4">
            <p className="max-w-xl text-sm md:text-lg">
              In the dynamic world of digital innovation, making your mark
              demands more than just a functional digital product; it requires a
              harmonious blend of aesthetics, functionality, and enduring
              appeal. At WebLab, we understand the intricacies of the digital
              realm and are dedicated to propelling your online presence to new
              heights. Our commitment goes beyond conventional development; we
              immerse ourselves in your vision, bringing a blend of creativity,
              technical excellence, and strategic thinking to every project.
            </p>
            <p className="max-w-xl text-sm md:text-lg">
              With a keen eye for detail and a passion for perfection, we turn
              your digital dreams into tangible realities. Our holistic approach
              ensures that from the initial concept to the final rollout, every
              aspect of your project is handled with utmost care and precision.
              Embrace a partnership with us and experience a journey where your
              objectives are met with our innovative solutions, unparalleled
              expertise, and a relentless pursuit of excellence.
            </p>
          </div>

          <div className="w-full px-5 lg:px-10 flex flex-col md:flex-row gap-8 pt-8 lg:justify-center lg:items-center">
            <div className="md:w-[45rem] h-[25rem] card orange">
              <div className="pt-8 px-8">
                <h3 className="font-bold text-3xl ">Peak Quality Design</h3>
                <p className="text-white">
                  The highest standard of quality and design available in the
                  market.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-full h-fit pt-5 md:pt-10 px-2">
                <div className="border border-blue-500 py-2 px-2 mx-2">
                  <h2 className="text-white font-bold text-xl md:text-4xl text-center">
                    Stunning Looking App Designs
                  </h2>
                </div>
                <div>
                  <svg
                    className="w-5 h-8 md:w-12 md:h-10 absolute"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 28 28"
                    enableBackground="new 0 0 28 28"
                  >
                    <polygon
                      fill="#FFFFFF"
                      points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 "
                    />
                    <rect
                      x="12.5"
                      y="13.6"
                      transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)"
                      width="2"
                      height="8"
                    />
                    <polygon points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 " />
                  </svg>
                </div>
              </div>
              <div className="w-full h-fit flex justify-center items-start md:pt-8">
                <div className="md:h-[10rem] md:w-[35rem] h-2 w-full">
                  <WindowMacOs />
                </div>
              </div>
            </div>
            <div className="md:w-[30rem] h-[25rem] card blue">
              <div className="pt-8 px-8">
                <h3 className="font-bold text-3xl">Flexible Pricing</h3>
                <p className="text-white">
                  Discover our flexible pricing options that can be customized
                  to fit your specific needs.
                </p>
                <div className="flex justify-center items-center">
                  <Image
                    alt="pricing card"
                    src="/images/pricingcard.png"
                    width={1432}
                    height={1520}
                    className="w-[15rem] lg:w-[20rem]"
                    priority={true}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-5 lg:px-10 flex flex-col md:flex-row gap-8 pt-6 lg:justify-center lg:items-center">
            <div className="md:w-[30rem] h-[25rem] card green">
              <div className="pt-8 px-8">
                <h3 className="font-bold text-3xl">
                  Uninterrupted Support and Maintenance
                </h3>
                <p className="text-white">
                  We offer peace of mind with ongoing support and maintenance
                  services post-launch.
                </p>
              </div>
            </div>
            <div className="md:w-[45rem] h-[25rem] card purple overflow-hidden ">
              <div className="pt-8 px-8">
                <h3 className="font-bold text-3xl">
                  Any Platform, Every Possibility
                </h3>
                <p className="text-white">
                  Our versatile development team brings your vision to life on
                  any device, any operating system, without limits.
                </p>
              </div>
              <div className="md:px-10 md:pt-5 pt-3 flex w-full md:gap-8 relative">
                <Image
                  alt=""
                  src="/images/android_mockup.png"
                  width={1939}
                  height={2046}
                  className="lg:w-[10vw] w-[80%] rotate-12 absolute -left-2 xl:w-[55%] xl:left-10"
                />
                <Image
                  alt=""
                  src="/images/iphone_mockup.png"
                  height={2048}
                  width={831}
                  className="lg:w-[10vw] w-[40%] rotate-12 absolute lg:right-12 right-16 xl:w-[30%] xl:right-20 xl:pr-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
