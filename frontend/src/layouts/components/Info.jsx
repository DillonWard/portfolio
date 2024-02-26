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
        <p className="text-2xl font-medium">Info</p>
        <hr className="m-4 border border-[#F1ECE1]" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <p className="text-[#F1ECE1]">Nationality</p>
          <p className="text-[#F1ECE1]">Irish</p>
        </div>
        <div className="flex justify-between text-[#F1ECE1]">
          <p className="text-[#F1ECE1]">Location</p>
          <p className="text-[#F1ECE1]">Bordeaux, France</p>
        </div>
        <div className="flex justify-between text-[#F1ECE1]">
          <p className="text-[#F1ECE1]">Experience</p>
          <p className="text-[#F1ECE1]">
            {years} years
            {months == 0 ? "" : `, ${months} months`}
          </p>
        </div>
      </div>
      <div className="flex justify-between space-y-2">
        <div className="flex items-center">
          <p className="text-[#F1ECE1]">English</p>
          <p className="pl-1 text-[#bbb8b3] text-sm">(Native)</p>
        </div>

        <div className="space-x-1">
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1]" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1]" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1]" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1]" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1]" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <p className="text-[#F1ECE1]">French</p>
          <p className="pl-1 text-[#bbb8b3] text-sm">(Proficient)</p>
        </div>
        <div className="space-x-1">
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1]" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1]" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1]" />
          <FontAwesomeIcon icon={faCircle} className="text-[#F1ECE1]" />
          <FontAwesomeIcon icon={faCircle} className="text-slate-900" />
        </div>
      </div>
    </div>
  );
};
export default Info;
