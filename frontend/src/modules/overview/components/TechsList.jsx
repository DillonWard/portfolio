import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const TechsList = ({ items }) => {
  return (
    <div>
      {items.map((line, i) => {
        return (
          <div key={i} className="py-4 grid grid-cols-8">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-slate-700 px-2 col-span-1"
              size="lg"
            />
            <div className="col-span-7">
              {line.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="zoom cursor-pointer hover:text-blue-600"
                  >
                    {index !== line.length - 1 ? `${item}, ` : `${item}`}
                  </span>
                );
              })}
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
};
TechsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
export default TechsList;
