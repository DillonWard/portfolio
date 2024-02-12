import Dashboard from "@Layouts/Dashboard.jsx";
import Overview from "@Modules/overview";
import Landing from "@Layouts/Landing.jsx";

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/d",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Overview />,
      },
    ],
  },
];

export default routes;
