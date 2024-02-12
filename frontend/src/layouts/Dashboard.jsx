import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen grid grid-cols-4 w-screen">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-3 bg-[#FAFAFAFA]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
