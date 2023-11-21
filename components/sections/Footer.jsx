import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full h-[22rem] lg:h-[20rem] bg-[#0a0517] flex justify-center items-center md:justify-start lg:items-center md:px-[10vw]">
      <div className="lg:grid lg:grid-cols-8 justify-items-stretch  items-center">
        <div className="flex flex-col items-center md:items-start col-span-2">
          <Image
            src="/images/weblab_light.png"
            alt="logo"
            width={2563}
            height={614}
            className="w-[6rem]"
          />

          

          <div className="flex gap-8">
            <a>
              <p className="text-white text-sm md:text-lg mt-5">
                Privacy Policy
              </p>
            </a>
            <a>
              <p className="text-white text-sm md:text-lg mt-5">
                Terms of Service
              </p>
            </a>
          </div>
          <p className="text-white text-sm md:text-lg mt-5">
            ©2023 WebLab, LLC. All rights reserved.
          </p>
        </div>
        <div className="col-start-9 col-span-2 mt-5">
          <div className="flex gap-8 mt-5 justify-center items-center w-full md:items-start">
            <a href="https://twitter.com/weblabcreative">
              <Image
                src="/images/x.png"
                alt="logo"
                width={512}
                height={512}
                className={`w-[1.4rem] md:w-[2rem]`}
              />
            </a>
            <a href="https://www.instagram.com/weblab_creative/">
              <Image
                src="/images/instagram.png"
                alt="logo"
                width={512}
                height={512}
                className={`w-[1.4rem] md:w-[2rem]`}
              />
            </a>

            <a>
              <Image
                src="/images/tik-tok.png"
                alt="logo"
                width={512}
                height={512}
                className={`w-[1.4rem] md:w-[2rem]`}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
