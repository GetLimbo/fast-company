import React from "react";
import BookMark from "./bookmark";

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
    newBookMarkFild,
  } = props;

  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((item) => (
          <span className={"badge m-1 bg-" + item.color} key={item._id}>
            {item.name}
          </span>
        ))}
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
        <button onClick={() => onDelete(_id)} className="btn btn-danger">
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default User;
