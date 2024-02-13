import { XyzTransition } from "@animxyz/react";
import { useSelector } from "react-redux";
import TechsList from "./components/TechsList";

const Overview = () => {
  const { frontend, backend, infrastructure } = useSelector(
    (state) => state.overview
  );

  return (
    <div className="bg-gray-50 px-10 flex-1 py-6">
      <p className="text-5xl text-center text-slate-900 py-14">
        Skills Overview
      </p>
      <div className="grid grid-cols-3 gap-6 min-h-[35vh] pt-8">
        <XyzTransition appear xyz="fade down-50% front-5 ">
          <div className="shadow-md bg-white rounded-md py-4 zoom">
            <p className="text-center text-2xl pb-8 text-slate-800 font-medium">
              Frontend
            </p>
            <div className="px-8 text-xl text-slate-800">
              <TechsList items={frontend} />
            </div>
          </div>
        </XyzTransition>
        <XyzTransition appear xyz="fade down-75% front-5">
          <div className="shadow-md bg-white rounded-md py-4 zoom">
            <p className="text-center text-2xl pb-8 text-slate-800 font-medium">
              Backend
            </p>
            <div className="px-8 text-xl text-slate-800">
              <TechsList items={backend} />
            </div>
          </div>
        </XyzTransition>
        <XyzTransition appear xyz="fade down-100% front-5">
          <div className="shadow-md bg-white rounded-md py-4 zoom">
            <p className="text-center text-2xl pb-8 text-slate-800 font-medium">
              Infrastructure
            </p>
            <div className="px-8 text-xl text-slate-800">
              <TechsList items={infrastructure} />
            </div>
          </div>
        </XyzTransition>
      </div>
    </div>
  );
};
export default Overview;
