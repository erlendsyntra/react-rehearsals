import "./Progress.css";
const Progress = () => {
  const myStyle = { backgroundColor: "red", width: 100 };
  return (
    <div id="container">
      <div id="bar">
        <div id="progress" style={myStyle}></div>
      </div>
      <button>Add 5%</button>
    </div>
  );
};
export default Progress;
