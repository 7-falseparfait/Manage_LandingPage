import "swiper/css";
import { useState } from "react";
import "swiper/css/pagination";
import { Hero } from "./Hero";
import { Manage } from "./Manage";
import { Simplify } from "./Simplify";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Steps } from "./Steps";
import { Slides } from "./Slides";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero isOpen={isOpen} />
      <Manage />
      <Steps />
      <Slides />
      <Simplify />
      <Footer />
    </main>
  );
}
export default App;
