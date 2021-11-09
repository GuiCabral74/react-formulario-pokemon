import React from "react";

const Inputs = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      onChange={props.change}
      checked={props.checked || null}
    />
  );
};

export default Inputs;