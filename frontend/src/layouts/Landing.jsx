import Profile from "@/assets/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFile,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "react-tooltip";
import { intervalToDuration } from "date-fns";

const { months, years } = intervalToDuration({
  start: new Date(2018, 7),
  end: new Date(2024, 2),
});

const copyEmail = () =>
  navigator.clipboard.writeText(import.meta.env.VITE_EMAIL_ADDRESS);

const Landing = () => {
  return (
    <div className="bg-slate-800 h-screen py-10 px-6 flex flex-col w-screen">
      <img src={Profile} className="rounded-full h-52 w-52 mx-auto" />
      <p className="text-center pt-6 text-5xl text-[#F1ECE1]">Dillon Ward</p>
      <p className="text-center py-4  text-xl text-[#F1ECE1]">
        Senior Software Developer
      </p>

      <div className="py-10">
        <p className="text-center text-[#F1ECE1] text-3xl uppercase">Info</p>
        <hr className="p-2 m-2 border-t-2"></hr>
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
      </div>

      <div className="py-8">
        <p className="pt-6 text-center text-[#F1ECE1] text-3xl uppercase">
          Languages
        </p>
        <hr className="p-2 m-2 border-t-2"></hr>

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
      <div className="text-center inset-x-0 bottom-0 mt-auto">
        <Tooltip id="email-tooltip" />
        <FontAwesomeIcon
          onClick={copyEmail}
          data-tooltip-id="email-tooltip"
          data-tooltip-content="Copy email address"
          icon={faEnvelope}
          className="hover:cursor-pointer mx-2 bg-[#F1ECE1] border rounded-full p-1 text-slate-800"
          size="xl"
        />

        <Tooltip id="github-tooltip" />
        <FontAwesomeIcon
          data-tooltip-id="github-tooltip"
          data-tooltip-content="Go to Github profile"
          icon={faGithub}
          className="hover:cursor-pointer mx-2 bg-[#F1ECE1] border rounded-full p-1 text-slate-800"
          size="xl"
        />

        <Tooltip id="linkedin-tooltip" />
        <FontAwesomeIcon
          data-tooltip-id="linkedin-tooltip"
          data-tooltip-content="Go to Linkedin profile"
          icon={faLinkedin}
          className="hover:cursor-pointer mx-2 bg-[#F1ECE1] border rounded-full p-1 text-slate-800"
          size="xl"
        />

        <Tooltip id="cv-tooltip" />
        <FontAwesomeIcon
          data-tooltip-id="cv-tooltip"
          data-tooltip-content="Download CV"
          icon={faFile}
          className="hover:cursor-pointer mx-2 bg-[#F1ECE1] border rounded-full p-1 text-slate-800"
          size="xl"
        />
      </div>
    </div>
  );
};

export default Landing;
