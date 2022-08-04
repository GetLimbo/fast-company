// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { paginate } from "../utils/paginate";
// import Pagination from "./pagination";
// import User from "./user";
// const Users = ({ users: allUsers, ...rest }) => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const count = allUsers.length;
//     const pageSize = 4;

//     const handlePageChange = (pageIndex) => {
//         setCurrentPage(pageIndex);
//         console.log("page: ", pageIndex);
//     };
//     const usersCrop = paginate(allUsers, currentPage, pageSize);
//     return (
//         <>
//             {count > 0 && (
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th scope="col">Имя</th>
//                             <th scope="col">Качества</th>
//                             <th scope="col">Провфессия</th>
//                             <th scope="col">Встретился, раз</th>
//                             <th scope="col">Оценка</th>
//                             <th scope="col">Избранное</th>
//                             <th />
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {usersCrop.map((user) => (
//                             <User {...rest} {...user} key={user._id} />
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//             <Pagination
//                 itemsCount={count}
//                 pageSize={pageSize}
//                 currentPage={currentPage}
//                 onPageChange={handlePageChange}
//             />
//         </>
//     );
// };
// Users.propTypes = {
//     users: PropTypes.array
// };

// export default Users;
import React, { useState, useEffect } from "react";
import User from "./user";
import SearchStatus from "./searchstatus";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";
import api from "../api";
import GroupList from "./groupList";

const Users = ({ users, handleDelete, handleBookmark }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setselectedProf] = useState();
    const pageSize = 4;
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    const handleProfessionSelect = (item) => {
        setselectedProf(item);
        setCurrentPage(1);
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    let filtereUsers = null;

    if (selectedProf) {
        filtereUsers = users.filter((user) => {
            // if (
            //     JSON.stringify(user.profession) === JSON.stringify(selectedProf)
            // ) {
            //     console.log(
            //         "if",
            //         JSON.stringify(user.profession),
            //         JSON.stringify(selectedProf)
            //     );
            // }
            return (
                JSON.stringify(user.profession) === JSON.stringify(selectedProf)
            );
        });
    } else {
        filtereUsers = users;
    }

    const count = filtereUsers.length;

    const startIndex = (currentPage - 1) * pageSize;
    let newCurrentPage = currentPage;
    if (startIndex >= filtereUsers.length) {
        newCurrentPage = newCurrentPage - 1;
    }
    const userCrop = paginate(filtereUsers, newCurrentPage, pageSize);
    const cleanFilter = () => {
        setselectedProf();
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={cleanFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                {count > 0 && (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Встретился, раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>

                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {userCrop.map((user) => (
                                <User
                                    key={user._id}
                                    {...user}
                                    onDelete={handleDelete}
                                    handleBookmark={handleBookmark}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemCount={count}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                        currentPage={newCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookmark: PropTypes.func.isRequired
};

export default Users;
