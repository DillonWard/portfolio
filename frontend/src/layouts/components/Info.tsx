import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { intervalToDuration, Duration } from "date-fns";

export const Info: FC = () => {
  const duration: Duration = intervalToDuration({
    start: new Date(2018, 7),
    end: new Date(),
  });

  const { years = 0, months = 0 } = duration;

  return (
    <div>
      <div className="text-center">
        <p className="text-xl sm:text-2xl font-medium">Info</p>
        <hr className="mx-auto mt-4 mb-6 border border-[#F1ECE1] w-full max-w-md" />
      </div>
      <div className="max-w-sm mx-auto">
        <div className="grid grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-4 text-sm sm:text-base">
          <p className="text-[#F1ECE1] text-left">Nationality</p>
          <p className="text-[#F1ECE1] text-left">Irish</p>

          <p className="text-[#F1ECE1] text-left">Location</p>
          <p className="text-[#F1ECE1] text-left">Bordeaux, France</p>

          <p className="text-[#F1ECE1] text-left">Experience</p>
          <p className="text-[#F1ECE1] text-left">
            {years} years{months === 0 ? "" : `, ${months} months`}
          </p>

          <div className="flex items-center text-left">
            <p className="text-[#F1ECE1]">English</p>
            <p className="pl-1 text-[#bbb8b3] text-xs sm:text-sm">(Native)</p>
          </div>
          <div className="space-x-1 text-left">
            {Array.from({ length: 5 }).map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faCircle}
                className="text-[#F1ECE1] text-xs sm:text-sm"
              />
            ))}
          </div>

          <div className="flex items-center text-left">
            <p className="text-[#F1ECE1]">French</p>
            <p className="pl-1 text-[#bbb8b3] text-xs sm:text-sm">(Proficient)</p>
          </div>
          <div className="space-x-1 text-left">
            {Array.from({ length: 4 }).map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faCircle}
                className="text-[#F1ECE1] text-xs sm:text-sm"
              />
            ))}
            <FontAwesomeIcon
              icon={faCircle}
              className="text-slate-900 text-xs sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
