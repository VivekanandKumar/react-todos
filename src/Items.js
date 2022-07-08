import { useState } from "react";

const Items = (props) => {
  const { listItem, updateItem } = props;
  const handleDelete = (id) => {
    const newList = listItem.filter((item) => {
      return item.id !== id;
    });
    updateItem(newList);
  };
  const handleCheck = (id) => {
    listItem.find((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return updateItem([...listItem]);
    });
  };
  return (
    <>
      {listItem.map((item) => {
        const { text, id, completed } = item;
        return (
          <div className="listItem" key={id}>
            <input
              checked={completed}
              className="itemStatus"
              type="checkbox"
              onChange={() => handleCheck(id)}
            />
            <p className={completed ? "checked" : ""}>{text}</p>
            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Items;
