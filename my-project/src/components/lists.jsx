import React from "react";
import PropTypes from "prop-types";

const NavList = ({ className }) => {
  return (
    <ul className={`${className}`}>
      <a href="">
        <li>Products</li>
      </a>
      <a href="">
        <li>Subcription</li>
      </a>
      <a href="">
        <li>Why Nura?</li>
      </a>
      <a href="">
        <li>Support</li>
      </a>
    </ul>
  );
};
NavList.PropTypes = {
  className: PropTypes.string.isRequired,
};

export default NavList;

