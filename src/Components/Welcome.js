import React from "react";

function Welcome(props) {
    return (
    <div>
        <h1>Hello To @Falilou.OD, My React App{props.name}</h1>;
        <h2>It is {new Date().toLocaleTimeString()}.</h2>;
    </div>
    )
  }

  export default Welcome;

  {/*App.js> Dashboard>>> 
  if / else>>>>>> true: User Logged In>>>>>> false: User should Log in*/}
