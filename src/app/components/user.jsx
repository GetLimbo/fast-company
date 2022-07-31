// import React from "react";
// import PropTypes from "prop-types";
// import Quality from "./quality";
// import BookMark from "./bookmark";
// const User = ({
//     _id,
//     name,
//     qualities,
//     profession,
//     completedMeetings,
//     rate,
//     onDelete,
//     bookmark,
//     onToggleBookMark
// }) => {
//     return (
//         <tr key={_id}>
//             <td>{name}</td>
//             <td>
//                 {qualities.map((qual) => (
//                     <Quality key={qual._id} {...qual} />
//                 ))}
//             </td>
//             <td>{profession.name}</td>
//             <td>{completedMeetings}</td>
//             <td>{rate} /5</td>
//             <td>
//                 <BookMark
//                     status={bookmark}
//                     onClick={() => onToggleBookMark(_id)}
//                 />
//             </td>
//             <td>
//                 <button
//                     onClick={() => onDelete(_id)}
//                     className="btn btn-danger"
//                 >
//                     delete
//                 </button>
//             </td>
//         </tr>
//     );
// };
// User.propTypes = {
//     _id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     qualities: PropTypes.array,
//     profession: PropTypes.object.isRequired,
//     completedMeetings: PropTypes.number.isRequired,
//     rate: PropTypes.number.isRequired,
//     onDelete: PropTypes.func.isRequired,
//     bookmark: PropTypes.bool,
//     onToggleBookMark: PropTypes.func.isRequired
// };

// export default User;

import React from "react";
import BookMark from "./bookmark";
import PropTypes from "prop-types";
import ColorQualitis from "./qualitie";

const User = (props) => {
    const {
        _id,
        name,
        qualities,
        profession,
        completedMeetings,
        rate,
        onDelete,
        handleBookmark,
        newBookMarkFild
    } = props;

    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>
                <ColorQualitis qualities={qualities} />
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} /5</td>
            <td>
                <BookMark
                    handleBookmark={handleBookmark}
                    id={_id}
                    status={newBookMarkFild}
                />
            </td>
            <td>
                <button
                    onClick={() => onDelete(_id)}
                    className="btn btn-danger"
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    newBookMarkFild: PropTypes.bool.isRequired
};
export default User;
