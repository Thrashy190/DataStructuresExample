import React, { useState } from "react";
import "../App.css";
import Cuadrado from "./shared/Cuadrado";

function Stack() {
  const [number, setNumber] = useState(0);
  const [stack, setStack] = useState([]);

  const maxBooks = 5;

  function setData(data) {
    setStack(data);
  }

  function enStack() {
    console.log("enStack");
    if (stack.length === maxBooks) {
      return alert("Nuestro stack esta lleno");
    }
    setData([...stack, number]);
    setNumber(number + 1);
    console.log(number);
  }

  function deStack() {
    console.log("deStack");
    if (stack.length === 0) {
      return alert("Nuestro stack esta vacio");
    }
    const copia = [...stack];
    copia.pop();
    setData(copia);
  }

  return (
    <div className="App">
      <header>
        <h1>Stack example</h1>
        <span>Esto es un ejemplo de un stack</span>
      </header>
      <div className="contenedor-contenido">
        <div>
          <ul className="recuadros">
            <Cuadrado num={stack[4]} />
            <Cuadrado num={stack[3]} />
            <Cuadrado num={stack[2]} />
            <Cuadrado num={stack[1]} />
            <Cuadrado num={stack[0]} />
          </ul>
        </div>
        <div className="contenedor-customers">
          <span>Numero de datos totales: {stack.length} </span>
          <span>
            Siguiente dato en salir:{" "}
            {stack.length === 0 ? "Ninguno" : stack[stack.length - 1]}
          </span>
        </div>
        <div className="botones">
          <button onClick={deStack}>Reduce</button>
          <button onClick={enStack}>Aumenta</button>
        </div>
      </div>
    </div>
  );
}

export default Stack;
