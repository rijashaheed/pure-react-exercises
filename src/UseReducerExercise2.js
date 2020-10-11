import React, {useReducer} from 'react';

const reducer = (state, action) => {

  switch(action.type) {
    case 'low':
      return {level: "low"};
    case 'medium':
      return {level: "medium"};
    case 'high':
      return {level: "high"};
    case 'off':
      return {level: "turned off"};
    default:
      return {level: "turned on"};
  }
}

const RoomLights = () => {

  const [state, dispatch] = useReducer(reducer, "");
  
  return (
    <>
      <h4>Set light </h4>
      <p>The light is {state.level}</p>
      <button onClick={()=>{dispatch({type:'low'})}}>Low</button>
      <button onClick={()=>{dispatch({type:'medium'})}}>Medium</button>
      <button onClick={()=>{dispatch({type:'high'})}}>High</button>
      <h4>Turn off light</h4>
      <button  onClick={()=>{dispatch({type:'off'})}}>Turn off</button>
    </>
  )
}

export default RoomLights;