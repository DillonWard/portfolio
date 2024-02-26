import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
class Projects extends Component {
  render() {
    return (
      <div className="text-[#F1ECE1]">
        <div className="text-center">
          <p className="text-2xl font-medium">Projects</p>
          <hr className="m-4 border border-[#F1ECE1]" />
        </div>
        <div className="space-y-4">
          {this.props.projects.map((project, index) => {
            return (
              <div
                key={index}
                className="rounded p-4 hover:bg-slate-700 duration-75 space-y-1"
              >
                <p className="text-xl font-medium">{project.project}</p>
                <p>{project.description}</p>
                <div className="space-y-2">
                  {project.frontend ? (
                    <p>
                      {project.frontend.map((tech, i) => {
                        return (
                          <span
                            key={i}
                            className="py-1 px-3 rounded-full text-sm text-white bg-slate-600 hover:bg-slate-800 duration-200 mr-1 cursor-pointer"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </p>
                  ) : (
                    ""
                  )}
                  {project.backend ? (
                    <p>
                      {project.backend.map((tech, i) => {
                        return (
                          <span
                            key={i}
                            className="py-1 px-3 rounded-full text-sm text-white bg-slate-600 hover:bg-slate-800 duration-200 mr-1 cursor-pointer"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </p>
                  ) : (
                    ""
                  )}
                  {project.infrastructure ? (
                    <p>
                      {project.infrastructure.map((tech, i) => {
                        return (
                          <span
                            key={i}
                            className="py-1 px-3 rounded-full text-sm text-white bg-slate-600 hover:bg-slate-800 duration-200 mr-1 cursor-pointer"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </p>
                  ) : (
                    ""
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
