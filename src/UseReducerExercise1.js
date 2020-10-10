import React, { useReducer, useRef } from "react";

const ShoppingList = () => {
  // const arrLength = 0;
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name,
          },
        ];
      case "remove":
        return state.filter((element, index) => index !== action.index);
      case "clear":
        if (action.keyCode === 13) {
          return false;
        }
        return state.splice(-1, 0);
      default:
        return state;
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  function preventRefresh(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onClick={preventRefresh}>
        <input ref={inputRef} />
        <button onClick={handleSubmit}>Add</button>
        <button onClick={() => dispatch({ type: "clear" })}>Clear List</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => dispatch({ type: "remove", index })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingList;
