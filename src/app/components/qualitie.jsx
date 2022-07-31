// import React from "react";
// import PropTypes from "prop-types";
// const Quality = ({ color, name, _id }) => {
//     return (
//         <span className={"badge m-1 bg-" + color} key={_id}>
//             {name}
//         </span>
//     );
// };
// Quality.propTypes = {
//     color: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     _id: PropTypes.string.isRequired
// };

// export default Quality;

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
