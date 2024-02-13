import Profile from "@/assets/profile.jpeg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { intervalToDuration } from "date-fns";
import TypeIt from "typeit-react";
import { XyzTransition } from "@animxyz/react";

const { months, years } = intervalToDuration({
  start: new Date(2018, 7),
  end: new Date(2024, 2),
});

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="h-[calc(100vh-128px)] bg-slate-800 flex flex-col pt-14">
        <div className="grid grid-cols-4 text-[#F1ECE1] px-6 h-3/6 items-center justify-center">
          <div className="col-span-1">
            <img src={Profile} className="rounded-full h-64 w-64 mx-auto" />
          </div>
          <div className="col-span-2">
            <div className="text-3xl">
              <p className="py-1">Hi, my name is</p>
              <p className="text-8xl py-1">Dillon Ward</p>
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

              <p className="pt-5 text-base text-[#F1ECE1]">
                With up to 5 years of experience, I have a proven track record
                that showcases a willingness to adapt to any technology stack,
                and an ability to learn new technologies
              </p>
            </div>
          </div>
        </div>
        <XyzTransition appear xyz="fade-25% down">
          <div
            className="flex items-center justify-center"
            style={{ "--xyz-opacity": 0 }}
          >
            <div className="w-1/3">
              <div>
                <p className="text-center text-[#F1ECE1] text-3xl uppercase">
                  Info
                </p>
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

              <div>
                <p className="text-center text-[#F1ECE1] text-3xl uppercase">
                  Languages
                </p>
                <hr className="p-2 m-2 border-t-2"></hr>

                <div className="flex justify-between space-y-2">
                  <div className="flex items-center">
                    <p className="text-[#F1ECE1]">English</p>
                    <p className="pl-1 text-[#bbb8b3] text-sm">(Native)</p>
                  </div>

                  <div className="space-x-1">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-[#F1ECE1]"
                    />
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-[#F1ECE1]"
                    />
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-[#F1ECE1]"
                    />
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-[#F1ECE1]"
                    />
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-[#F1ECE1]"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <p className="text-[#F1ECE1]">French</p>
                    <p className="pl-1 text-[#bbb8b3] text-sm">(Proficient)</p>
                  </div>
                  <div className="space-x-1">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-[#F1ECE1]"
                    />
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-[#F1ECE1]"
                    />
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-[#F1ECE1]"
                    />
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-[#F1ECE1]"
                    />
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-slate-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </XyzTransition>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;
