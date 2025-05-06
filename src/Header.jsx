import hambugerIcon from "./assets/images/icon-hamburger.svg";
import closeIcon from "./assets/images/icon-close.svg";
import { motion, AnimatePresence } from "framer-motion";
export function Header({ isOpen, setIsOpen }) {
  const menuLinks = ["Pricing", "Products", "About Us", "Careers", "Community"];
  return (
    <header className="flex justify-between container-padding py-6 relative">
      <img src="/src/assets/images/logo.svg" alt="" />
      <button onClick={() => setIsOpen(!isOpen)} className="z-20">
        {" "}
        {isOpen ? (
          <img src={closeIcon} alt="Close Menu" className="cursor-pointer" />
        ) : (
          <img src={hambugerIcon} alt="Open Menu" className="cursor-pointer" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            className="absolute bg-very-light-gray h-[42vh] w-[90%] shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-s mt-[4rem] left-0 right-0 mx-auto z-10 flex flex-col items-center justify-center gap-5 mb-6"
          >
            {menuLinks.map((item, i) => (
              <a className="text-2xl font-medium" key={i} href="#">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
