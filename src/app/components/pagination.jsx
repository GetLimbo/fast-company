// import React from "react";
// import PropTypes from "prop-types";
// import _ from "lodash";
// const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
//     const pagesCount = Math.ceil(itemsCount / pageSize);
//     if (pagesCount === 1) return null;
//     const pages = _.range(1, pagesCount + 1);

//     return (
//         <nav>
//             <ul className="pagination">
//                 {pages.map((page) => (
//                     <li
//                         className={
//                             "page-item " +
//                             (page === currentPage ? "active" : "")
//                         }
//                         key={"page_" + page}
//                     >
//                         <button
//                             className="page-link"
//                             onClick={() => {
//                                 onPageChange(page);
//                             }}
//                         >
//                             {page}
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };
// Pagination.propTypes = {
//     itemsCount: PropTypes.number.isRequired,
//     pageSize: PropTypes.number.isRequired,
//     currentPage: PropTypes.number.isRequired,
//     onPageChange: PropTypes.func.isRequired
// };

// export default Pagination;

import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item" +
                            (page === currentPage ? " active" : "")
                        }
                        key={"page_" + page}
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
