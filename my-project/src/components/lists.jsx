import PropTypes from "prop-types";
import listItem from "../data/listData";

const NavList = ({ className }) => {
  return (
    <ul className={`${className}`}>
      {listItem.map((item) => {
        return (
          <a key={item.id} href="#">
            <li>{item.linkText}</li>
          </a>
        );
      })}
    </ul>
  );
};
NavList.propTypes = {
  className: PropTypes.string.isRequired,
};

export default NavList;
