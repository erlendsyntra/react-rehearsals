import ColoredSquare from "./components/ColoredSquare/ColoredSquare";
import MyForm from "./components/MyForm/MyForm";
import Progress from "./components/Progress/Progress";

const App = () => {
  return (
    <div>
      <ColoredSquare />
      <Progress progress="25%" color="red" />
      <MyForm />
    </div>
  );
};
export default App;
