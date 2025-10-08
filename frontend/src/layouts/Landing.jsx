import Profile from "@/assets/profile.jpeg";
import Info from "./components/Info";
import IconsList from "./components/IconsList";
import Experiences from "@Modules/experiences";
import Projects from "@Modules/projects";
import Repositories from "@Modules/repositories";
import TypeIt from "typeit-react";
import { useEffect, useRef, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExperiences } from "../modules/experiences/store";
import { fetchProjects } from "../modules/projects/store";
import { fetchRepositories } from "../modules/repositories/store";
import { XyzTransition } from "@animxyz/react";

const Portfolio = () => {
  const projectsElement = useRef(null);
  const experienceElement = useRef(null);
  const infoElement = useRef(null);
  const githubElement = useRef(null);

  const useIsInViewport = (ref) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(
          ([entry]) => setIsIntersecting(entry.isIntersecting),
          { rootMargin: "0px 0px -200px 0px" }
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  };

  const projectsInView = useIsInViewport(projectsElement);
  const experienceInView = useIsInViewport(experienceElement);
  const infoInView = useIsInViewport(infoElement);
  const githubInView = useIsInViewport(githubElement);

  const selectInfo = infoInView;
  const selectExperience = !infoInView && experienceInView;
  const selectProjects =
    !experienceInView && !infoInView & !githubInView && projectsInView;
  const selectGithub = !experienceInView && !infoInView & githubInView;

  const navItems = [
    { title: "Info", control: selectInfo, element: infoElement },
    {
      title: "Work Experience",
      control: selectExperience,
      element: experienceElement,
    },
    { title: "Projects", control: selectProjects, element: projectsElement },
    { title: "Github Overview", control: selectGithub, element: githubElement },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-800">
      <XyzTransition appear xyz="fade-100%">
        <div className="grid grid-cols-1 lg:grid-cols-9 text-[#F1ECE1] gap-6 lg:gap-10">
          <div className="lg:col-start-2 lg:col-span-2 mx-auto">
            <div className="py-10 lg:py-20 lg:sticky lg:top-2 lg:h-[80vh]">
              <img src={Profile} className="rounded-full h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52 mx-auto lg:mx-0" />
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl">
                  <p className="py-1">Hi, my name is</p>
                  <p className="text-3xl sm:text-4xl lg:text-5xl py-1">Dillon Ward</p>
                  <TypeIt
                    getBeforeInit={(instance) => {
                      instance
                        .type("I'm a front")
                        .pause(300)
                        .delete(5)
                        .type("back")
                        .pause(300)
                        .delete(4)
                        .type("Full Stack Developer");
                      return instance;
                    }}
                    options={{ speed: 50 }}
                  />
                </div>

                <p className="pt-5 text-sm sm:text-base text-[#F1ECE1]">
                  With up to 6+ years of experience, I have a proven track record
                  that showcases a willingness to adapt to any technology stack,
                  and an ability to learn new technologies
                </p>
                <div className="py-6 lg:py-10">
                  <ul className="capitalize space-y-3 lg:space-y-4 hidden lg:block">
                    {navItems.map(({ title, control, element }, navIndex) => {
                      return (
                        <li
                          key={navIndex}
                          onClick={() =>
                            element.current?.scrollIntoView({
                              behavior: "smooth",
                            })
                          }
                        >
                          <span
                            className={`hover:nav-line hover:text-[#F1ECE1] cursor-pointer flex flex-row text-sm lg:text-base ${
                              control ? "text-[#F1ECE1]" : "text-gray-400"
                            }`}
                          >
                            <hr
                              className={`mx-2 my-auto ${
                                control
                                  ? "w-8 lg:w-10 border-[#F1ECE1]"
                                  : "w-4 lg:w-5 border-gray-400"
                              } duration-200`}
                            />
                            {title}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="lg:absolute lg:bottom-10 mt-6 lg:mt-0">
                <IconsList />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 py-10 lg:py-20 px-4 sm:px-6 lg:px-10 space-y-10 lg:space-y-14">
            <div style={{ "--xyz-opacity": 0 }} className="space-y-10">
              <div ref={infoElement}>
                <Info />
              </div>
              <div ref={experienceElement}>
                <Experiences />
              </div>
              <div ref={projectsElement}>
                <Projects />
              </div>
              <div ref={githubElement}>
                <Repositories />
              </div>
            </div>
          </div>
        </div>
      </XyzTransition>
    </div>
  );
};

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-40 h-40 rounded-full animate-spin border border-dashed border-white border-t-transparent"></div>
    </div>
  );
};
const Landing = () => {
  const experiences = useSelector((state) => state.experiences).loading;
  const projects = useSelector((state) => state.projects).loading;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExperiences());
    dispatch(fetchProjects());
    dispatch(fetchRepositories());
  }, []);

  return (
    <div className="h-screen bg-slate-800">
      {experiences || projects ? <Loader /> : <Portfolio />}{" "}
    </div>
  );
};

export default Landing;
