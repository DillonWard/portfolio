import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import { FC } from "react";

export const IconsList: FC = () => {
  const [emailTooltip, setEmailTooltip] = useState("Copy email address");
  type UrlKey = "linkedin" | "github" | "email";

  const urls = {
    linkedin: import.meta.env.VITE_LINKEDIN_URL,
    github: import.meta.env.VITE_GITHUB_URL,
    email: import.meta.env.VITE_EMAIL_ADDRESS,
  };

  const copyEmail = async (): Promise<void> => {
    await navigator.clipboard.writeText(urls["email"]);
    setEmailTooltip("Copied!");
  }

  const handleEmailMouseLeave = (): void => {
    setTimeout(() => {
      setEmailTooltip("Copy email address");
    }, 200);
  };

  const openUrl = (url: UrlKey): void => {
    window.open(urls[url], "_blank");
  };
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <Tooltip id="email-tooltip" />
        <FontAwesomeIcon
          onClick={() => copyEmail()}
          onMouseLeave={handleEmailMouseLeave}
          data-tooltip-id="email-tooltip"
          data-tooltip-content={emailTooltip}
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
} 