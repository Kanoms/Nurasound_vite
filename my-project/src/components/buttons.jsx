import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ text, className }) => {
  return <button className={`${className}`}>{text} <BsArrowRight/></button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
