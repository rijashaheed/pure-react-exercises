import React, { useRef } from "react";

const RefInputName = () => {
  const fname = useRef();
  const lname = useRef();

  const showName = () => {
    alert(`Hi ${fname.current.value} ${lname.current.value}`);
  };
  return (
    <div>
      <label>First name: </label>
      <input type="text" ref={fname} />
      <label>Last name: </label>
      <input type="text" ref={lname} />
      <button onClick={showName}>Alert the Name!</button>
    </div>
  );
};

export default RefInputName;
