import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full h-[25rem] lg:h-[20rem] bg-[#0a0517] flex justify-center items-center md:justify-start lg:items-center md:px-[10vw]">
      <div className="lg:grid lg:grid-cols-8 justify-items-stretch  items-center">
        <div className="flex flex-col items-start col-span-2">
          <Image
            src="/images/weblab_light.png"
            alt="logo"
            width={2563}
            height={614}
            className={`w-[6rem]`}
          />
          <div className="flex gap-8">
            <a>
              <p className="text-white text-lg mt-5">Privacy Policy</p>
            </a>
            <a>
              <p className="text-white text-lg mt-5">Terms of Service</p>
            </a>
          </div>
          <p className="text-white text-lg mt-5">
            ©2023 WebLab, LLC. All rights reserved.
          </p>
        </div>
        <div className="col-start-7 col-span-2 mt-5">
          <div>
            <p className="text-white text-lg">Contact</p>
            <p className="text-white text-lg">
              1234 Main St. Suite 1234 City, State 12345
            </p>
            <p className="text-white text-lg">123-456-7890</p>
          </div>
          <div className="flex gap-8 mt-5">

            <a href="www.twitter.com">
              <Image
                src="/images/gorjeo.png"
                alt="logo"
                width={512}
                height={512}
                className={`w-[2rem]`}
              />
            </a>
            <a>
              <Image
                src="/images/instagram.png"
                alt="logo"
                width={512}
                height={512}
                className={`w-[2rem]`}
              />
            </a>

            <a>
              <Image
                src="/images/tik-tok.png"
                alt="logo"
                width={512}
                height={512}
                className={`w-[2rem]`}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
