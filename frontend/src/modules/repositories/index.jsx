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
          <p className="text-2xl font-medium">Github Overview</p>
          <hr className="m-4 border border-[#F1ECE1]" />
        </div>
        <div className="flex items-center justify-center">
          <div className="-m-10 h-[600px] w-[600px]">
            <Pie
              className="m-0"
              data={this.getChartData(this.props.repositories)}
              options={{
                plugins: {
                  legend: {
                    position: "left",
                  },
                },
              }}
            />
          </div>{" "}
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
