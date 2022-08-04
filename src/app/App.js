// import React, { useState } from "react";
// import Users from "./components/users";
// import SearchStatus from "./components/searchStatus";
// import api from "./api";

// function App() {
//     const [users, setUsers] = useState(api.users.fetchAll());
//     const handleDelete = (userId) => {
//         setUsers(users.filter((user) => user._id !== userId));
//     };
//     const handleToggleBookMark = (id) => {
//         setUsers(
//             users.map((user) => {
//                 if (user._id === id) {
//                     return { ...user, bookmark: !user.bookmark };
//                 }
//                 return user;
//             })
//         );
//         console.log(id);
//     };
//     return (
//         <div>
//             <SearchStatus length={users.length} />
//             <Users
//                 onDelete={handleDelete}
//                 onToggleBookMark={handleToggleBookMark}
//                 users={users}
//             />
//         </div>
//     );
// }

// export default App;
import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api";

const App = () => {
    const [users, setUsers] = useState();

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleBookmark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    user.newBookMarkFild = !user.newBookMarkFild;
                }

                return user;
            })
        );
    };

    return (
        users && (
            <Users
                users={users}
                handleDelete={handleDelete}
                handleBookmark={handleBookmark}
            />
        )
    );
};

export default App;
