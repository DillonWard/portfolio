import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { intervalToDuration } from "date-fns";

const Info = () => {
  const { months, years } = intervalToDuration({
    start: new Date(2018, 10),
    end: new Date(2024, 1),
  });

  return (
    <div>
      <div className="text-center">
        <p className="text-xl sm:text-2xl font-medium">Info</p>
        <hr className="mx-auto mt-4 mb-6 border border-[#F1ECE1] w-full max-w-md" />
      </div>
      <div className="space-y-3 sm:space-y-4">
        <div className="flex justify-between text-sm sm:text-base">
          <p className="text-[#F1ECE1]">Nationality</p>
          <p className="text-[#F1ECE1]">Irish</p>
        </div>
        <div className="flex justify-between text-[#F1ECE1] text-sm sm:text-base">
          <p className="text-[#F1ECE1]">Location</p>
          <p className="text-[#F1ECE1]">Bordeaux, France</p>
        </div>
        <div className="flex justify-between text-[#F1ECE1] text-sm sm:text-base">
          <p className="text-[#F1ECE1]">Experience</p>
          <p className="text-[#F1ECE1]">
            {years} years
            {months == 0 ? "" : `, ${months} months`}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-[#F1ECE1] text-sm sm:text-base">English</p>
          <p className="pl-1 text-[#bbb8b3] text-xs sm:text-sm">(Native)</p>
        </div>
        <div className="space-x-1">
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1] text-xs sm:text-sm" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1] text-xs sm:text-sm" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1] text-xs sm:text-sm" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1] text-xs sm:text-sm" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1] text-xs sm:text-sm" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-[#F1ECE1] text-sm sm:text-base">French</p>
          <p className="pl-1 text-[#bbb8b3] text-xs sm:text-sm">(Proficient)</p>
        </div>
        <div className="space-x-1">
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1] text-xs sm:text-sm" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1] text-xs sm:text-sm" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1] text-xs sm:text-sm" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1] text-xs sm:text-sm" />
          <FontAwesomeIcon icon={faCircle} className="text-slate-900 text-xs sm:text-sm" />
        </div>
      </div>
    </div>
  );
};
export default Info;
