import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTechnology: null
    };
  }

  handleTechnologyClick = (technology) => {
    this.setState({
      selectedTechnology: this.state.selectedTechnology === technology ? null : technology
    });
  }

  getFilteredAndSortedProjects = () => {
    const { projects } = this.props;
    const { selectedTechnology } = this.state;

    if (!selectedTechnology) {
      return projects;
    }

    return [...projects].sort((a, b) => {
      const aHasTech = this.projectHasTechnology(a, selectedTechnology);
      const bHasTech = this.projectHasTechnology(b, selectedTechnology);
      
      if (aHasTech && !bHasTech) return -1;
      if (!aHasTech && bHasTech) return 1;
      return 0;
    });
  }

  projectHasTechnology = (project, technology) => {
    return [
      ...(project.frontend_technologies || []),
      ...(project.backend_technologies || []),
      ...(project.other_technologies || [])
    ].includes(technology);
  }
  render() {
    return (
      <div className="text-[#F1ECE1] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium">Projects</p>
          <hr className="mx-auto mt-4 mb-6 sm:mb-8 border border-[#F1ECE1] w-full max-w-md" />
          {this.state.selectedTechnology && (
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <p className="text-sm text-gray-400">
                Filtering by: <span className="text-[#F1ECE1] font-medium">{this.state.selectedTechnology}</span>
              </p>
              <button
                onClick={() => this.setState({ selectedTechnology: null })}
                className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white text-sm rounded-lg transition-colors duration-200"
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>
        <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto">
          {this.getFilteredAndSortedProjects().map((project, index) => {
            const hasSelectedTech = this.state.selectedTechnology ? 
              this.projectHasTechnology(project, this.state.selectedTechnology) : true;
            
            return (
              <div
                key={index}
                className={`rounded-lg p-4 sm:p-6 hover:bg-slate-700 duration-300 space-y-3 sm:space-y-4 shadow-sm border border-slate-700/50 transition-all ${
                  !hasSelectedTech ? 'opacity-30 bg-slate-800/50' : 'opacity-100'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium leading-tight">
                    {project.name}
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-2 text-[#F1ECE1] hover:text-gray-300 transition-colors duration-200 inline-block"
                      >
                        <FontAwesomeIcon icon={faUpRightFromSquare} className="text-sm sm:text-base" />
                      </a>
                    )}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{project.description}</p>
                <div className="space-y-3 sm:space-y-4">
                  {project.frontend_technologies && project.frontend_technologies.length > 0 && (
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Frontend</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.frontend_technologies.map((tech, i) => (
                          <span
                            key={i}
                            onClick={() => this.handleTechnologyClick(tech)}
                            className={`py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm text-white duration-200 cursor-pointer transition-all ${
                              this.state.selectedTechnology === tech 
                                ? 'bg-blue-600 hover:bg-blue-700 ring-2 ring-blue-400 shadow-lg' 
                                : 'bg-slate-600 hover:bg-slate-800'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.backend_technologies && project.backend_technologies.length > 0 && (
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Backend</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.backend_technologies.map((tech, i) => (
                          <span
                            key={i}
                            onClick={() => this.handleTechnologyClick(tech)}
                            className={`py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm text-white duration-200 cursor-pointer transition-all ${
                              this.state.selectedTechnology === tech 
                                ? 'bg-green-600 hover:bg-green-700 ring-2 ring-green-400 shadow-lg' 
                                : 'bg-slate-600 hover:bg-slate-800'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.other_technologies && project.other_technologies.length > 0 && (
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Other</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.other_technologies.map((tech, i) => (
                          <span
                            key={i}
                            onClick={() => this.handleTechnologyClick(tech)}
                            className={`py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm text-white duration-200 cursor-pointer transition-all ${
                              this.state.selectedTechnology === tech 
                                ? 'bg-purple-600 hover:bg-purple-700 ring-2 ring-purple-400 shadow-lg' 
                                : 'bg-slate-600 hover:bg-slate-800'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  const { projects, loading, error } = state.projects;
  return {
    projects,
    loading,
    error,
  };
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStatetoProps)(Projects);
