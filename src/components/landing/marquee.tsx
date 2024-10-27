'use client'

import React from "react";
import CountUp from "react-countup";

const FakeStats = () => {
  return (
    <div className="w-full h-[7%] flex flex-col px-3 md:flex-row justify-around font-gtEss border rounded-sm border-neutral-500 bg-white/40">
      <div className="p-4 text-lg flex flex-row items-center gap-2">
        <div className="text-2xl font-bold"><CountUp end={2000} duration={5} />+ </div><div>awkward situations avoided</div>
      </div>
      <div className="p-4 text-lg flex flex-row items-center gap-2">
        <div className="text-2xl font-bold"><CountUp end={5000} duration={5} />+ </div><div>sarcastic comments properly identified</div>
      </div>
      <div className="p-4 text-lg flex flex-row items-center gap-2">
        <div className="text-2xl font-bold"><CountUp end={9000} duration={5} />+ </div><div>&apos;I was just kidding&apos; moments prevented</div>
      </div>
    </div>
  );
};

export default FakeStats;