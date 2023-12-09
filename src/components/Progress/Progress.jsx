import { useState } from "react";
import "./Progress.css";

const Progress = ({ progress = "50%", color = "yellow" }) => {
  const [width, setWidth] = useState(progress);
  const [background, setBackground] = useState(color);
  const myStyle = { backgroundColor: background, width: width };
  return (
    <div id="container">
      <div id="bar">
        <div id="progress" style={myStyle}></div>
      </div>
      <button
        onClick={() => {
          const currSize = parseInt(width.substring(0, width.indexOf("%")));
          if (currSize < 96) {
            setWidth((currSize + 5).toString() + "%");
          }
        }}
      >
        Add 5%
      </button>
    </div>
  );
};
export default Progress;
