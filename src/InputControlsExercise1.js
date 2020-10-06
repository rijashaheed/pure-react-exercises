import React, { useState } from "react";

const InputName = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleFname = (event) => {
    setFname(event.target.value);
  };

  const handleLname = (event) => {
    setLname(event.target.value);
  };

  return (
    <>
      <label>First Name:</label>
      <input type="text" value={fname} onChange={handleFname} />
      <label>Last Name:</label>
      <input type="text" value={lname} onChange={handleLname} />
      <p>
        Hello {fname} {lname}!
      </p>
    </>
  );
};

export default InputName;
