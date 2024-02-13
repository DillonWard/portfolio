import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "react-tooltip";

const Footer = () => {
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
    <div className="bg-slate-800 min-h-16 flex items-center justify-center">
      <div className="text-center">
        <Tooltip id="email-tooltip" />
        <FontAwesomeIcon
          onClick={() => copyEmail}
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
          onClick={() => openUrl("github")}
        />

        <Tooltip id="linkedin-tooltip" />
        <FontAwesomeIcon
          data-tooltip-id="linkedin-tooltip"
          data-tooltip-content="Go to Linkedin profile"
          icon={faLinkedin}
          className="hover:cursor-pointer mx-2 bg-[#F1ECE1] border rounded-full p-1 text-slate-800"
          size="xl"
          onClick={() => openUrl("linkedin")}
        />
      </div>
    </div>
  );
};

export default Footer;
