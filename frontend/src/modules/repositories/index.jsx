import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";

class Repositories extends Component {
  getChartData(data) {
    let languages = data.map((item) => item.language).filter((n) => n);
    let chartData = {};

    languages.map((item) => {
      chartData[item] == undefined
        ? (chartData[item] = 1)
        : (chartData[item] += 1);
    });
    return {
      labels: Object.keys(chartData),
      datasets: [{ data: Object.values(chartData) }],
    };
  }
  render() {
    return (
      <div>
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-medium">Github Overview</p>
          <hr className="mx-auto mt-4 mb-6 border border-[#F1ECE1] w-full max-w-md" />
        </div>
        <div className="flex items-center justify-center px-4">
          <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[600px] h-[300px] sm:h-[400px] lg:h-[600px]">
            <Pie
              className="m-0"
              data={this.getChartData(this.props.repositories)}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    position: window.innerWidth < 768 ? "bottom" : "left",
                    labels: {
                      fontSize: window.innerWidth < 768 ? 10 : 12,
                      boxWidth: window.innerWidth < 768 ? 10 : 12,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

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
