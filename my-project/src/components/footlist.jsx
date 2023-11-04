import React from "react";
import PropTypes from "prop-types";

const Footlist = (props) => {
  const items = [];
  for (let i = 1; i <= 9; i++) {
    const itemKey = `item${i}`;
    const itemClass = i === 1 ? "special" : "xshidden"; // Add a special class to item1
    items.push(
      <li key={itemKey} className={itemClass}>
        {props[itemKey]}
      </li>
    );
  }

  return (
    <ul className="flex flex-col items-center text-center sm:text-left sm:items-start gap-[9px]">
      {items}
    </ul>
  );
};

Footlist.propTypes = {
  item1: PropTypes.string.isRequired,
  item2: PropTypes.string.isRequired,
  item3: PropTypes.string.isRequired,
  item4: PropTypes.string.isRequired,
  item5: PropTypes.string.isRequired,
  item6: PropTypes.string.isRequired,
  item7: PropTypes.string.isRequired,
  item8: PropTypes.string.isRequired,
  item9: PropTypes.string.isRequired,
};

export default Footlist;
