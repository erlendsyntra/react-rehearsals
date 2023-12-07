import { useEffect, useState } from "react";
import "./ColoredSquare.css";

const ColoredSquare = () => {
  const [squareColor, setSquareColor] = useState("green");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    counter % 3 === 0 ? setSquareColor("red") : setSquareColor("green");
  }, [counter]);
  return (
    <div id="square">
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>
      <div className={`square square-${squareColor}`}></div>
    </div>
  );
};
export default ColoredSquare;
