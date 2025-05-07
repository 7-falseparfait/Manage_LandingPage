import hambugerIcon from "./assets/images/icon-hamburger.svg";
import closeIcon from "./assets/images/icon-close.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import logo from "./assets/images/logo.svg";
export function Header({ isOpen, setIsOpen }) {
  const menuLinks = ["Pricing", "Products", "About Us", "Careers", "Community"];
  return (
    <header className="flex justify-between items-center container-padding py-6 relative">
      <div>
        <img src={logo} alt="" />
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="z-20 lg:hidden">
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
            className="absolute lg:hidden bg-very-light-gray h-[42vh] w-[90%] shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-s mt-[4.5rem] left-0 right-0 mx-auto z-10 flex flex-col items-center justify-center gap-5 mb-6 top-0"
          >
            {menuLinks.map((item, i) => (
              <a className="text-2xl font-medium" key={i} href="#">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden lg:flex gap-5">
        {menuLinks.map((item, i) => (
          <a key={i} href="#">
            {item}
          </a>
        ))}
      </div>
      <Button className="hidden lg:block">Get Started</Button>
    </header>
  );
}
