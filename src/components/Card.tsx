import React from "react";

const CalanderCard = ({
  EventName,
  imglink,
  Month,
  Date,
  summary,
}: {
  EventName: string;
  imglink: string;
  Month: string;
  Date: string;
  summary: string;
}) => {
  return (
    <div className="flex justify-center transition ease-in-out delay-200 hover:shadow-sm hover:shadow-white rounded-lg border-r-2 ">
      <div className="p-3 h-[150px] w-[150px] mt-3">
        <h3 className="p-4 py-5 border-2 border-slate-300 rounded-lg text-center text-lg">
          {Month}
          <br />
          {Date}
        </h3>
      </div>
      <div className="p-5 pt-7 h-[350px] w-[300px]">
        <div className=" space-y-4">
          <h1 className="text-xl">{EventName}</h1>
          <h2 className="text-balance text-md">{summary}</h2>
          <img
            className="size-full rounded-sm"
            src={imglink}
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default CalanderCard;
