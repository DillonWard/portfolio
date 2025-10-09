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



  getTechnologyData(techType) {
    const { projects } = this.props;
    let techCount = {};

    projects.forEach(project => {
      let techs = [];
      
      if (techType === 'frontend') {
        techs = project.frontend_technologies || [];
      } else if (techType === 'backend') {
        techs = project.backend_technologies || [];
      } else if (techType === 'infrastructure') {
        techs = project.other_technologies || [];
      }
      
      techs.forEach(tech => {
        techCount[tech] = (techCount[tech] || 0) + 1;
      });
    });

    const sortedTechs = Object.entries(techCount)
      .sort(([,a], [,b]) => b - a);

    const colors = [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
      '#FF9F40', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
      '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F', '#FFB6C1',
      '#87CEEB', '#F0E68C', '#FF7F50', '#20B2AA', '#32CD32',
      '#FF69B4', '#00CED1', '#FF4500', '#9370DB', '#00FA9A'
    ];

    return {
      labels: sortedTechs.map(([tech]) => tech),
      datasets: [{
        data: sortedTechs.map(([, count]) => count),
        backgroundColor: colors.slice(0, sortedTechs.length),
        borderColor: colors.slice(0, sortedTechs.length).map(color => color + 'CC'),
        borderWidth: 2,
        hoverBackgroundColor: colors.slice(0, sortedTechs.length).map(color => color + 'DD'),
        hoverBorderColor: colors.slice(0, sortedTechs.length),
        hoverBorderWidth: 3,
      }],
    };
  }

  render() {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: '#F1ECE1',
            font: {
              size: this.state.isMobile ? 9 : 11,
            },
            boxWidth: this.state.isMobile ? 8 : 10,
            usePointStyle: false,
            padding: 6,
          },
        },
        tooltip: {
          backgroundColor: 'rgba(30, 41, 59, 0.95)',
          titleColor: '#F1ECE1',
          bodyColor: '#F1ECE1',
          borderColor: '#F1ECE1',
          borderWidth: 1,
          cornerRadius: 6,
          callbacks: {
            label: function(context) {
              return `${context.label}: Used in ${context.parsed} project${context.parsed !== 1 ? 's' : ''}`;
            }
          }
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
    };

    return (
      <div className="pb-16 sm:pb-20 lg:pb-24">
        <div className="text-center mb-8">
          <p className="text-xl sm:text-2xl font-medium">Technology Overview</p>
          <hr className="mx-auto mt-4 mb-6 border border-[#F1ECE1] w-full max-w-md" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
          <div>
            <div className="text-center mb-4">
              <h3 className="text-base sm:text-lg font-medium text-[#F1ECE1]">Frontend Technologies</h3>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[250px] sm:max-w-[300px] h-[250px] sm:h-[300px]">
                <Pie
                  className="m-0"
                  data={this.getTechnologyData('frontend')}
                  options={chartOptions}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-4">
              <h3 className="text-base sm:text-lg font-medium text-[#F1ECE1]">Backend Technologies</h3>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[250px] sm:max-w-[300px] h-[250px] sm:h-[300px]">
                <Pie
                  className="m-0"
                  data={this.getTechnologyData('backend')}
                  options={chartOptions}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-4">
              <h3 className="text-base sm:text-lg font-medium text-[#F1ECE1]">Infrastructure & Tools</h3>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[250px] sm:max-w-[300px] h-[250px] sm:h-[300px]">
                <Pie
                  className="m-0"
                  data={this.getTechnologyData('infrastructure')}
                  options={chartOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  const { projects } = state.projects;
  return {
    projects: projects || [],
  };
};

Repositories.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStatetoProps)(Repositories);
