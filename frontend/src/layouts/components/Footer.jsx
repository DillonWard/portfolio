import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "react-tooltip";

const copyEmail = () =>
  navigator.clipboard.writeText(import.meta.env.VITE_EMAIL_ADDRESS);

const Footer = () => {
  return (
    <div className="bg-slate-800 h-16 py-10 px-6 flex flex-col">
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

export default Footer;
