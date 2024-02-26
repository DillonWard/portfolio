import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types";

const ClickableList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <span
            key={index}
            data-tooltip-id={`${item}-tooltip`}
            data-tooltip-content="Click to see projects that use this technology"
            className="cursor-pointer hover:text-blue-700"
          >
            <Tooltip id={`${item}-tooltip`} delayShow={1000} place="bottom" />
            {index !== items.length - 1 ? `${item}, ` : `${item}`}
          </span>
        );
      })}
    </div>
  );
};

ClickableList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default ClickableList;
