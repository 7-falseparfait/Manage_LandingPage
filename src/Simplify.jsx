import { Button } from "./Button";

export function Simplify() {
  return (
    <section className="bg-primary text-center py-40 lg:py-24 container-padding relative overflow-y-hidden lg:flex lg:justify-between lg:overflow-x-hidden">
      <h1 className="!text-white lg:w-[45%] lg:text-left relative z-50">
        Simplify how your team works today.
      </h1>
      <svg
        className="absolute top-[2rem] left-[-43rem] z-[1] lg:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="814"
        height="814"
      >
        <rect
          width="436"
          height="970"
          x="774"
          y="-62"
          fill="hsl(12 88% 62%)"
          fill-rule="evenodd"
          rx="218"
          transform="rotate(45 718.814 -291.157)"
        />
      </svg>
      <svg
        className="hidden lg:block absolute bottom-[10rem] right-[-34rem] z-[2]"
        xmlns="http://www.w3.org/2000/svg"
        width="814"
        height="814"
      >
        <rect
          width="436"
          height="970"
          x="774"
          y="-62"
          fill="hsl(12 88% 62%)"
          fill-rule="evenodd"
          rx="218"
          transform="rotate(45 718.814 -291.157)"
        />
      </svg>
      <svg
        className=" hidden lg:block lg:absolute top-[-1rem] right-[60rem] z-[2]"
        xmlns="http://www.w3.org/2000/svg"
        width="814"
        height="814"
      >
        <rect
          width="436"
          height="1000"
          x="774"
          y="-62"
          fill="hsl(12 88% 62%)"
          fill-rule="evenodd"
          rx="218"
          transform="rotate(45 718.814 -291.157)"
        />
      </svg>
      <div className="lg:flex lg:justify-center lg:items-center">
        <Button className="mt-4 relative z-50" variant="secondary">
          Get Started
        </Button>
      </div>
    </section>
  );
}
