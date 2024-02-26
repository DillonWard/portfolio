import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { format, intervalToDuration } from "date-fns";

class Experiences extends Component {
  intervalDuration(start, end) {
    const { months, years } = intervalToDuration({ start, end });
    if (years && months) return `${years}y, ${months}m`;
    else if (years && !months) return `${years}y`;
    else return `${months}m`;
  }

  render() {
    return (
      <div className="text-[#F1ECE1]">
        <div className="text-center">
          <p className="text-2xl font-medium">Work Experience</p>
          <hr className="m-4 border border-[#F1ECE1]" />
        </div>
        <div className="space-y-4">
          {this.props.experiences.map((experience, index) => {
            return (
              <div
                key={index}
                className="rounded p-4 grid grid-cols-4 hover:bg-slate-700 duration-75"
              >
                <div className="col-span-1">
                  {format(experience.start_date, "MMM, yyyy")} -{" "}
                  {format(experience.end_date, "MMM, yyyy")}
                  <span className="text-slate-600">
                    {" "}
                    (
                    {this.intervalDuration(
                      experience.start_date,
                      experience.end_date
                    )}
                    )
                  </span>
                </div>
                <div className="col-span-3 space-y-1">
                  <p className="text-lg font-medium">{experience.title}</p>
                  <p>{experience.company}</p>
                  <p> {experience.location}</p>
                  <p>{experience.description}</p>
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
