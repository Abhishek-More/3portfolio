import React, { useMemo } from "react";

export const ContributionChart = ({
  contributions,
}: {
  contributions: any;
}) => {
  // Memoize mapped elements
  const contributionElements = useMemo(() => {
    // Day of the week  (0-6)
    const day = new Date().getDay();

    //Get the last 13 weeks + current week's days of contributions
    const datedContributions = contributions.contributions.slice(-91 - day - 1);

    return datedContributions.map((contribution: any, index: number) => (
      <div
        key={index}
        className={`${
          contribution.count > 0 ? "bg-[#7BFD79] opacity-80" : "bg-gray-700"
        } w-3 h-3 rounded-sm`}
      ></div>
    ));
  }, [contributions]);

  return (
    <div className="w-[260px] bg-black rounded-[25px] flex flex-col justify-center mx-auto p-4">
      <div className="grid grid-rows-7 grid-flow-col gap-1">
        {contributionElements}
      </div>
    </div>
  );
};
