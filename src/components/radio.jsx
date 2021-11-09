import React, { useEffect, useState } from "react";
import Inputs from "./inputs";

const Radio = () => {
  const [radio, setRadio] = useState("");

  return (
    <>
      <label>Weakness: </label>
      <label>
        <Inputs
          type="radio"
          value={radio}
          change={() => setRadio("fire")}
          checked={radio === "fire" /* true */}
        />
        Fire
      </label>
      <label>
        <Inputs
          type="radio"
          value={radio}
          change={() => setRadio("water")}
          checked={radio === "water"}
        />
        Water
      </label>
      <label>
        <Inputs
          type="radio"
          value={radio}
          change={() => setRadio("grass")}
          checked={radio === "grass"}
        />
        Grass
      </label>
    </>
  );
};

export default Radio;
