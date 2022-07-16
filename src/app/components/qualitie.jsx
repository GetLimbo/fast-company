import React from "react";

const ColorQualitis = ({ qualities }) => {
  return qualities.map((item) => (
    <span className={"badge m-1 bg-" + item.color} key={item._id}>
      {item.name}
    </span>
  ));
};

export default ColorQualitis;
