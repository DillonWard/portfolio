import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "@Plugins/router";
import "react-tooltip/dist/react-tooltip.css";
import "@animxyz/core";
import store from "./plugins/redux";
import { Provider } from "react-redux";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
