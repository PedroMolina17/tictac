import PropTypes from "prop-types";

export const Square = ({ children, isSelected, updateboard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateboard(index);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
Square.propTypes = {
  children: PropTypes.any,
  isSelected: PropTypes.any,
  updateboard: PropTypes.any,
  index: PropTypes.number,
};
