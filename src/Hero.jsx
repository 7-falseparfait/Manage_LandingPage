import { Button } from "./Button";
import tabletPattern from "./assets/images/bg-tablet-pattern.svg";
import illustration from "./assets/images/illustration-intro.svg";

export function Hero({ isOpen }) {
  return (
    <section className="min-h-screen container-padding section-spacing relative lg:flex flex-row-reverse lg:justify-between">
      <div
        className={`${
          isOpen ? "invisible" : ""
        } mt-7 lg:mt-0  place-self-center lg:w-[45%]  lg:place-self-auto relative`}
      >
        <img className="lg:mx-auto" src={illustration} alt="" />
        <img
          className="absolute top-[-10rem] right-[-5rem] z-[-1] lg:top-[-20rem] lg:right-[-10rem]"
          src={tabletPattern}
          alt=""
          srcset=""
        />
      </div>
      <div className="py-6 relative lg:w-[45%] lg:py-0 lg:flex flex-col">
        <h1 className="text-center lg:text-left lg:mt-20">
          Bring everyone together to build better products.
        </h1>
        <p className="text-center mt-4 lg:text-left">
          {" "}
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className=" text-center mt-6 lg:text-left lg:mt-10">
          <Button>Get Started</Button>
        </div>
        <img
          className="absolute top-[6rem] right-[-15rem]  z-[-1] lg:hidden"
          src={tabletPattern}
          alt=""
          srcset=""
        />
      </div>
    </section>
  );
}
