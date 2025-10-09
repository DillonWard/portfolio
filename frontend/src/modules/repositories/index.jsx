import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";

class Repositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isMobile: typeof window !== 'undefined' && window.innerWidth < 768
    });
  }

  getChartData(data) {
    let languages = data.map((item) => item.language).filter((n) => n);
    let chartData = {};

    languages.map((item) => {
      chartData[item] == undefined
        ? (chartData[item] = 1)
        : (chartData[item] += 1);
    });

    const colors = [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
      '#FF9F40', '#FF6B6B', '#C9CBCF', '#4ECDC4', '#45B7D1',
      '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'
    ];

    const dataValues = Object.values(chartData);
    const labels = Object.keys(chartData);

    return {
      labels: labels,
      datasets: [{
        data: dataValues,
        backgroundColor: colors.slice(0, labels.length),
        borderColor: colors.slice(0, labels.length).map(color => color + 'CC'),
        borderWidth: 2,
        hoverBackgroundColor: colors.slice(0, labels.length).map(color => color + 'DD'),
        hoverBorderColor: colors.slice(0, labels.length),
        hoverBorderWidth: 3,
      }],
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
                    position: this.state.isMobile ? "bottom" : "left",
                    labels: {
                      color: '#F1ECE1',
                      font: {
                        size: this.state.isMobile ? 10 : 12,
                      },
                      boxWidth: this.state.isMobile ? 10 : 12,
                      usePointStyle: false,
                      padding: 10,
                    },
                  },
                  tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    titleColor: '#F1ECE1',
                    bodyColor: '#F1ECE1',
                    borderColor: '#F1ECE1',
                    borderWidth: 1,
                    cornerRadius: 6,
                  },
                },
                elements: {
                  arc: {
                    borderWidth: 2,
                    borderColor: '#1e293b',
                  }
                },
                animation: {
                  animateRotate: true,
                  animateScale: false,
                  duration: 1000,
                }
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
