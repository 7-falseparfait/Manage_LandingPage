import { FeatureItem } from "./FeatureItem";
import tabletPattern from "./assets/images/bg-tablet-pattern.svg";

export function Manage() {
  return (
    <section className="lg:flex">
      <div className="container-padding text-center mt-6 lg:mt-0 sm:mt-0 lg:text-left relative">
        <h2>What's different about Manage ?</h2>
        <p className="mt-4">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
        <img
          className="absolute left-[-25rem] top-[9rem] z-[-1]"
          src={tabletPattern}
          alt=""
        />
      </div>
      <div className="mt-9 pl-[1.25rem] flex-col flex gap-8 lg:mt-0 lg:pr-[1.25rem]">
        <div>
          <FeatureItem
            className="lg:hidden"
            number={1}
            text={"Track company-wide progress"}
          />
          <div className={` hidden lg:flex items-center rounded-lg`}>
            <div className="bg-primary text-white rounded-full px-7 py-2 font-bold">
              01
            </div>
            <h3 className="ml-4 text-dark-blue">Track company-wide progress</h3>
          </div>
          <p className="mt-4 text-left lg:ml-[5.7rem]">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div>
          <FeatureItem
            className="lg:hidden"
            number={2}
            text={"Advanced built-in reports"}
          />
          <div className={` hidden lg:flex items-center rounded-lg`}>
            <div className="bg-primary text-white rounded-full px-7 py-2 font-bold">
              02
            </div>
            <h3 className="ml-4 text-dark-blue">Advanced built-in reports</h3>
          </div>
          <p className="mt-4 text-left lg:ml-[5.7rem]">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div>
          <FeatureItem
            className="lg:hidden"
            number={3}
            text={"Everything you need in one place"}
          />
          <div className={` hidden lg:flex items-center rounded-lg`}>
            <div className="bg-primary text-white rounded-full px-7 py-2 font-bold">
              03
            </div>
            <h3 className="ml-4 text-dark-blue">
              Everything you need in one place
            </h3>
          </div>
          <p className="mt-4 text-left lg:ml-[5.7rem]">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </section>
  );
}
