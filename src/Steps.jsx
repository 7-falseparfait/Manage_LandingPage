import { FeatureItem } from "./FeatureItem";

export function Steps() {
  return (
    <section className="mt-9 pl-[1.25rem] flex-col flex gap-5">
      <div>
        <FeatureItem number={1} text={"Track company-wide progress"} />
        <p className="mt-4 text-left">
          See how your day-to-day tasks fit into the wider vision. Go from
          tracking progress at the milestone level all the way done to the
          smallest of details. Never lose sight of the bigger picture again.
        </p>
      </div>
      <div>
        <FeatureItem number={2} text={"Advanced built-in reports"} />
        <p className="mt-4 text-left">
          Set internal delivery estimates and track progress toward company
          goals. Our customisable dashboard helps you build out the reports you
          need to keep key stakeholders informed.
        </p>
      </div>
      <div>
        <FeatureItem number={3} text={"Everything you need in one place"} />
        <p className="mt-4 text-left">
          Stop jumping from one service to another to communicate, store files,
          track tasks and share documents. Manage offers an all-in-one team
          productivity solution.
        </p>
      </div>
    </section>
  );
}
