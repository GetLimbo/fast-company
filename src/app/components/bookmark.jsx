// import React from "react";
// import PropTypes from "prop-types";
// const BookMark = ({ status, ...rest }) => {
//     return (
//         <button {...rest}>
//             <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
//         </button>
//     );
// };
// BookMark.propTypes = {
//     status: PropTypes.bool
// };

// export default BookMark;

import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, handleBookmark, ...rest }) => {
    return (
        <button onClick={() => handleBookmark(rest.id)}>
            <i className={status ? "bi bi-heart-fill" : "bi bi-heart"} />
        </button>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool,
    handleBookmark: PropTypes.func
};

export default BookMark;
