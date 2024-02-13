import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-128px)] flex flex-col bg-gray-50">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
