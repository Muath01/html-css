import React from "react";
import { useCountdown } from "../../../lib/hooks/useCountDown";
import { useRouter } from "next/navigation";

type ClockType = {
  target: number;
  calculateScore: () => void;
};
function Clock({ target, calculateScore }: ClockType) {
  const [minutes, seconds] = useCountdown(target);
  const router = useRouter();
  if (minutes == 0 && seconds == 0) {
    calculateScore();
  }
  return (
    <div className="">
      <div className=" h-40 flex justify-center items-center relative text-[62px] font-bold md:absolute left-3 md:top-3 mr-1">
        <span
          id="minutes"
          className="w-[5.5rem] xl:w-32 xl:h-32 h-[6.5rem] rounded-md shadow-2xl flex justify-center items-center xl:border-none shadow-custom"
        >
          {minutes >= 10 ? minutes : `0${minutes}`}
        </span>
        <span className="font-bold text-[34px] text-black shadow-2xl">:</span>
        <span
          id="seconds"
          className="w-[5.5rem] h-[6.5rem] xl:w-32 xl:h-32 rounded-md shadow-2xl  flex justify-center items-center xl:border-none  shadow-custom"
        >
          {seconds >= 10 ? seconds : `0${seconds}`}
        </span>
      </div>
    </div>
  );
}

export default Clock;
