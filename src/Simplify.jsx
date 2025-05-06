import { Button } from "./Button";

export function Simplify() {
  return (
    <section className="bg-primary text-center py-40 container-padding relative z-[-3] overflow-y-hidden">
      <h1 className="!text-white">Simplify how your team works today.</h1>
      <svg
        className="absolute top-[2rem] left-[-43rem] z-[-1]"
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
      <Button className="mt-4" variant="secondary">
        Get Started
      </Button>
    </section>
  );
}
