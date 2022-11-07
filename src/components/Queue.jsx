import React, { useState } from "react";
import "../App.css";
import Cuadrado from "./shared/Cuadrado";

function Queue() {
  const [number, setNumber] = useState(0);
  const [queue, setQueue] = useState([]);

  const maxCustomers = 6;

  function setData(data) {
    setQueue(data);
  }

  function enQueue() {
    console.log("enQueue");
    if (queue.length === maxCustomers) {
      return alert("Nuestro queue esta lleno");
    }
    setData([...queue, number]);
    setNumber(number + 1);
    console.log(number);
  }

  function deQueue() {
    console.log("deQueue");
    if (queue.length === 0) {
      return alert("Nuestro queue esta vacio");
    }
    const copia = [...queue];
    copia.shift();
    setData(copia);
  }

  return (
    <div className="App">
      <header>
        <h1>Queue example</h1>
        <span>Esto es un ejemplo de una Queue</span>
      </header>
      <div className="contenedor-contenido">
        <div>
          <ul>
            <Cuadrado num={queue[0]} />
            <Cuadrado num={queue[1]} />
            <Cuadrado num={queue[2]} />
            <Cuadrado num={queue[3]} />
            <Cuadrado num={queue[4]} />
            <Cuadrado num={queue[5]} />
          </ul>
        </div>
        <div className="contenedor-customers">
          <span>Numero de datos totales: {queue.length} </span>
          <span>
            Siguiente dato en salir: {queue.length === 0 ? "Ninguno" : queue[0]}
          </span>
        </div>
        <div className="botones">
          <button onClick={deQueue}>Reduce</button>
          <button onClick={enQueue}>Aumenta</button>
        </div>
      </div>
    </div>
  );
}

export default Queue;
