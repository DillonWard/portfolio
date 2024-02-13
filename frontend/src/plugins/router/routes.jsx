import Dashboard from "@Layouts/Dashboard.jsx";
import Experience from "@Modules/experience";
import Projects from "@Modules/projects";
import Overview from "@Modules/overview";
import Landing from "@Layouts/Landing.jsx";

const routes = [
  {
    path: "",
    name: "landing",
    element: <Landing />,
  },
  {
    path: "work",
    element: <Dashboard />,
    children: [
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
    ],
  },
];

export default routes;
