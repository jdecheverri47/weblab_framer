"use client";

import Image from "next/image";
import MenuButton from "./MenuButton";
import { useState, useEffect } from "react";
import Menu from "./Menu";

function Header() {
  const menuItems = [
    {
      id: 1,
      text: "Home",
      dataName: "landing",
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
      className={`text-white walsheim fixed w-full z-30 transition-all duration-300 ease-in-out backdropp ${
        scrolled ? " " : ""
      }`}
    >
      <nav
        className={`flex px-[4vw] justify-center xl:justify-between items-center transition-all duration-300 ease-in-out stroke ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <a href="/" className={`${menuOpen ? "opacity-0" : ""}`}>
          <Image
            src="/images/weblab_light.png"
            alt="logo"
            width={2563}
            height={614}
            className={`w-[8rem]`}
          />
        </a>

        <ul
          className={`lg:flex items-center space-x-8 hidden`}
        >
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.dataName}`}>
                <h1 className="font-regular text-lg hover:text-gray-400 transition-all ease-in-out ">
                  {item.text}
                </h1>
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden lg:block text-white px-4 py-2 rounded-full gradient_button_navbar hover:text-opacity-60 transition-all duration-300 ease-in-out  ">
          Contact Us
        </button>
        {/* <MenuButton isOpen={menuOpen} toggleMenu={toggleMenu} />
        <Menu isOpen={menuOpen} toggleMenu={toggleMenu} /> */}
      </nav>
    </header>
  );
}

export default Header;
