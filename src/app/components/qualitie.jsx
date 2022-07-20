import React from "react";
import PropTypes from "prop-types";

const ColorQualitis = ({ qualities }) => {
    return qualities.map((item) => (
        <span className={"badge m-1 bg-" + item.color} key={item._id}>
            {item.name}
        </span>
    ));
};
ColorQualitis.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default ColorQualitis;
