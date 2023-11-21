"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Header() {
  const menuItems = [
    {
      id: 1,
      text: "Home",
      dataName: "home",
    },
    {
      id: 2,
      text: "Benefits",
      dataName: "benefits",
    },
    {
      id: 3,
      text: "Services",
      dataName: "services",
    },
    {
      id: 4,
      text: "Pricing",
      dataName: "pricing",
    }
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`text-white walsheim fixed w-full z-30 ${
        scrolled ? " " : ""
      }`}
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}

        className={`w-1/2 flex px-2 justify-center lg:justify-between items-center stroke mx-auto border border-[#3561b1] rounded-full py-2 backdropp mt-2 shadow-md`}
      >
        <a href="/" className={`${menuOpen ? "opacity-0" : ""}`}>
          <Image
            src="/images/weblab_light.png"
            alt="logo"
            width={2563}
            height={614}
            priority={true}
            className={`w-[6rem] pl-4`}
          />
        </a>

        <ul
          className={`lg:flex items-center space-x-8 hidden px-4`}
        >
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.dataName}`}>
                <h1 className="font-normal text-md tracking-tighter p-1 rounded-2xl">
                  {item.text}
                </h1>
              </a>
            </li>
          ))}
          <span className="bubble"></span>
        </ul>


        <a className="hidden lg:block text-white px-6 py-2 rounded-full gradient_button_navbar hover:text-opacity-60 transition-all duration-300 ease-in-out text-md tracking-tighter" href='#contact'>
          Contact Us
        </a>
        {/* <MenuButton isOpen={menuOpen} toggleMenu={toggleMenu} />
        <Menu isOpen={menuOpen} toggleMenu={toggleMenu} /> */}
      </motion.nav>
    </header>
  );
}

export default Header;
