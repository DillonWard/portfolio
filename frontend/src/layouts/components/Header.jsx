import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import CV from "@/assets/cv.pdf";

const Header = () => {
  const navigate = useNavigate();
  const routes = {
    overview: "/work/overview",
    experience: "/work/experience",
    projects: "/work/projects",
    home: "/",
  };

  function handleClick(route) {
    navigate(routes[route]);
  }

  return (
    <div className="bg-slate-800 h-16 flex flex-row text-[#F1ECE1] justify-end px-6 items-center">
      <div className="h-8 space-x-5 flex flex-row">
        <div
          className="hover:text-[#c2beb6] hover:cursor-pointer"
          onClick={() => handleClick("home")}
        >
          Home
        </div>
        <div
          className="hover:text-[#c2beb6] hover:cursor-pointer"
          onClick={() => handleClick("overview")}
        >
          Overview
        </div>
        <div
          className="hover:text-[#c2beb6] hover:cursor-pointer"
          onClick={() => handleClick("experience")}
        >
          Experience
        </div>
        <div
          className="hover:text-[#c2beb6] hover:cursor-pointer"
          onClick={() => handleClick("projects")}
        >
          Projects
        </div>
        <a
          href={CV}
          download="Dillon Ward CV.pdf"
          className="hover:text-[#c2beb6] hover:cursor-pointer"
        >
          CV <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
    </div>
  );
};

export default Header;
