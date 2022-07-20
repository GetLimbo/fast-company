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
    status: PropTypes.bool.isRequired,
    handleBookmark: PropTypes.func.isRequired
};

export default BookMark;
