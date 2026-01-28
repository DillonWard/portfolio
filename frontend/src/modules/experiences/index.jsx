import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { format, intervalToDuration } from "date-fns";

class Experiences extends Component {
  intervalDuration(start, end) {
    const endDate = end || new Date();
    const { months, years } = intervalToDuration({ start, end: endDate });
    if (years && months) return `${years}y, ${months}m`;
    else if (years && !months) return `${years}y`;
    else return `${months}m`;
  }

  render() {
    return (
      <div className="text-[#F1ECE1] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xl sm:text-2xl font-medium">Work Experience</p>
          <hr className="mx-auto mt-4 mb-6 border border-[#F1ECE1] w-full max-w-md" />
        </div>
        <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto">
          {this.props.experiences.map((experience, index) => {
            return (
              <div
                key={index}
                className="rounded-lg p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-0 hover:bg-slate-700 duration-75 border border-slate-700/50"
              >
                <div className="lg:col-span-1">
                  <div className="text-sm sm:text-base">
                    {format(experience.start_date, "MMM, yyyy")} -{" "}
                    {experience.end_date ? format(experience.end_date, "MMM, yyyy") : "Present"}
                  </div>
                  <span className="text-slate-600 text-xs sm:text-sm">
                    (
                    {this.intervalDuration(
                      experience.start_date,
                      experience.end_date
                    )}
                    )
                  </span>
                </div>
                <div className="lg:col-span-3 space-y-2 sm:space-y-3">
                  <p className="text-lg sm:text-xl font-medium">{experience.title}</p>
                  <p className="text-sm sm:text-base text-gray-300">{experience.company}</p>
                  <p className="text-sm sm:text-base text-gray-300">{experience.location}</p>
                  <p className="text-sm sm:text-base leading-relaxed">{experience.description}</p>
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
  const { experiences, loading, error } = state.experiences;
  return {
    experiences,
    loading,
    error,
  };
};

Experiences.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStatetoProps)(Experiences);
