import React from "react";

const BookMark = ({ status, handleBookmark, ...rest }) => {
  return (
    <button onClick={() => handleBookmark(rest.id)}>
      <i className={status ? "bi bi-heart-fill" : "bi bi-heart"} />
    </button>
  );
};

export default BookMark;
