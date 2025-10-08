import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "react-tooltip";

const IconsList = () => {
  const urls = {
    linkedin: import.meta.env.VITE_LINKEDIN_URL,
    github: import.meta.env.VITE_GITHUB_URL,
    email: import.meta.env.VITE_EMAIL_ADDRESS,
  };

  const copyEmail = () => navigator.clipboard.writeText(urls["email"]);

  const openUrl = (url) => {
    window.open(urls[url], "_blank");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <Tooltip id="email-tooltip" />
        <FontAwesomeIcon
          onClick={() => copyEmail}
          data-tooltip-id="email-tooltip"
          data-tooltip-content="Copy email address"
          icon={faEnvelope}
          className="hover:cursor-pointer mx-2 sm:mx-3 lg:mx-4 text-[#F1ECE1] rounded-full p-1 sm:p-2"
          size={window.innerWidth < 640 ? "lg" : "xl"}
        />

        <Tooltip id="github-tooltip" />
        <FontAwesomeIcon
          data-tooltip-id="github-tooltip"
          data-tooltip-content="Go to Github profile"
          icon={faGithub}
          className="hover:cursor-pointer mx-2 sm:mx-3 lg:mx-4 text-[#F1ECE1] rounded-full p-1 sm:p-2"
          size={window.innerWidth < 640 ? "lg" : "xl"}
          onClick={() => openUrl("github")}
        />

        <Tooltip id="linkedin-tooltip" />
        <FontAwesomeIcon
          data-tooltip-id="linkedin-tooltip"
          data-tooltip-content="Go to Linkedin profile"
          icon={faLinkedin}
          className="hover:cursor-pointer mx-2 sm:mx-3 lg:mx-4 text-[#F1ECE1] rounded-full p-1 sm:p-2"
          size={window.innerWidth < 640 ? "lg" : "xl"}
          onClick={() => openUrl("linkedin")}
        />
      </div>
    </div>
  );
};

export default IconsList;
