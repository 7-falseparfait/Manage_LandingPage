import { Button } from "./Button";
import tabletPattern from "./assets/images/bg-tablet-pattern.svg";
import illustration from "./assets/images/illustration-intro.svg";

export function Hero({ isOpen }) {
  return (
    <section className="min-h-screen container-padding section-spacing relative">
      <img
        className="absolute top-[-10rem] right-[-5rem] z-[-1]"
        src={tabletPattern}
        alt=""
        srcset=""
      />
      <div className={`${isOpen ? "invisible" : ""} mt-7 place-self-center`}>
        <img src={illustration} alt="" />
      </div>
      <div className="py-6 relative">
        <h1 className="text-center">
          Bring everyone together to build better products.
        </h1>
        <p className="text-center mt-4">
          {" "}
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className=" text-center mt-6">
          <Button>Get Started</Button>
        </div>
        <img
          className="absolute top-[6rem] right-[-15rem]  z-[-1]"
          src={tabletPattern}
          alt=""
          srcset=""
        />
      </div>
    </section>
  );
}
