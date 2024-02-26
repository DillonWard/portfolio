import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { Chart } from "chart.js";
import { fetchRepositories } from "./store";

class Repositories extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <p className="text-2xl font-medium">Work Experience</p>
          <hr className="m-4 border border-[#F1ECE1]" />
        </div>
        <div className="space-y-4">
          <canvas id="repos" width="400" height="400"></canvas>
        </div>
      </div>
    );
  }
}
const ctx = document.getElementById("repos");
console.log(ctx);

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const mapStatetoProps = (state) => {
  const { repositories, loading, error } = state.repositories;
  return {
    repositories,
    loading,
    error,
  };
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStatetoProps)(Repositories);
