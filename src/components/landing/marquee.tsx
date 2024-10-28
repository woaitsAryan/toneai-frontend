import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Marquee = () => {
  const startDate = new Date('2024-10-27T00:00:00Z').getTime();
  const now = Date.now();
  const timeElapsed = now - startDate;

  const initialCount1 = Math.floor(timeElapsed / 10000); // 1 increment per second
  const initialCount2 = Math.floor(timeElapsed / 20000); // 1 increment every 2 seconds
  const initialCount3 = Math.floor(timeElapsed / 30000); // 1 increment every 3 seconds

  const [count1, setCount1] = useState(initialCount1);
  const [count2, setCount2] = useState(initialCount2);
  const [count3, setCount3] = useState(initialCount3);

  useEffect(() => {
    const updateCount1 = () => {
      setCount1(prev => prev + Math.floor(Math.random() * 2) + 1); // Increment by 1 to 3
    };

    const updateCount2 = () => {
      setCount2(prev => prev + Math.floor(Math.random() * 2) + 1); // Increment by 1 to 3
    };

    const updateCount3 = () => {
      setCount3(prev => prev + Math.floor(Math.random() * 3) + 1); // Increment by 1 to 3
    };

    const interval1 = setInterval(updateCount1, Math.floor(Math.random() * 10000) + 1000); // Random interval between 1 and 3 seconds
    const interval2 = setInterval(updateCount2, Math.floor(Math.random() * 20000) + 1000); // Random interval between 1 and 3 seconds
    const interval3 = setInterval(updateCount3, Math.floor(Math.random() * 30000) + 1000); // Random interval between 1 and 3 seconds

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="w-full h-[7%] flex flex-col px-3 md:flex-row justify-around font-gtEss border rounded-sm border-neutral-500 bg-white/40" suppressHydrationWarning>
      <div className="p-4 text-lg flex flex-row items-center gap-2">
        <div className="text-2xl font-bold"><CountUp start={initialCount1} end={count1} duration={1} />+ </div><div>awkward situations avoided</div>
      </div>
      <div className="p-4 text-lg flex flex-row items-center gap-2">
        <div className="text-2xl font-bold"><CountUp start={initialCount2} end={count2} duration={1} />+ </div><div>sarcastic comments properly identified</div>
      </div>
      <div className="p-4 text-lg flex flex-row items-center gap-2">
        <div className="text-2xl font-bold"><CountUp start={initialCount3} end={count3} duration={1} />+ </div><div>&apos;I was just kidding&apos; moments prevented</div>
      </div>
    </div>
  );
};

export default Marquee;