import PropTypes from "prop-types";

const listItem = [
  {
    id: 1,
    linkText: "Products",
  },
  {
    id: 2,
    linkText: "Subcription",
  },
  {
    id: 3,
    linkText: "Why Nura?",
  },
  {
    id: 4,
    linkText: "Support",
  },
  {
    id: 5,
    linkText: "Login",
  },
];

const NavList = ({ className }) => {
  return (
    <ul className={`${className}`}>
      {listItem.map((item) => {
        return (
          <a key={item.id} href="">
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
