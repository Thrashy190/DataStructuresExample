import React from "react";
import "../../App.css";

function Cuadrado({ num }) {
  return (
    <li>
      <div className="cuadro">
        <span>{num}</span>
      </div>
    </li>
  );
}

export default Cuadrado;
