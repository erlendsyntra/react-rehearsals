import ColoredSquare from "./components/ColoredSquare/ColoredSquare";
import MyForm from "./components/MyForm/MyForm";
import Progress from "./components/Progress/Progress";
import RandomCocktail from "./components/RandomCocktail/RandomCocktail";
import RandomUsers from "./components/RandomUsers/RandomUsers";

const App = () => {
  return (
    <div>
      <ColoredSquare />
      <Progress progress="25%" color="red" />
      <MyForm />
      <RandomCocktail />
      <RandomUsers />
    </div>
  );
};
export default App;
