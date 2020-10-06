import React, { useState } from "react";

function Room() {
  const [light, setLight] = useState(false);

  const handleClick = () => {
    setLight(!light);
  };
  return (
    <div>
      <h2>Room</h2>
      <button onClick={handleClick}>Light button</button>
      {light ? (
        <p>The light is switched on</p>
      ) : (
        <p>The light is switched off</p>
      )}
    </div>
  );
}

export default Room;
