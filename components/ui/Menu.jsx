import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
function Menu({ isOpen, toggleMenu }) {
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
    },
    {
      id: 5,
      text: "Contact",
      dataName: "contact",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
      document.documentElement.style.overflowX = "hidden";
    }
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          exit={{ opacity: 0, y: -1000 }}
          transition={{ duration: 1, type: "spring", bounce: 0.25 }}
          id="nav"
          className={`menu-list ${
            isOpen ? "opened" : ""
          } fixed w-screen h-screen bg-[#c83bb1] top-0 right-0 flex flex-col justify-center items-center font-bold -z-20 pointer-events-auto overflow-hidden`}
        >
          {menuItems.map((item) => (
            <motion.li key={item.id} className="nav-link">
              <a href={`#${item.dataName}`} onClick={toggleMenu}>
                <h1 data-name={item.text} className="menu_option">
                  {item.text}
                </h1>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export default Menu;
