import { useEffect, useState } from "react";
import "./randomCocktail.css";
const RandomCocktail = () => {
  const [clicked, setClicked] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    const getCocktail = async () => {
      setContent("Loading ...");
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      setContent(data.drinks[0].strDrink);
    };
    clicked ? getCocktail() : "";
    setClicked(false);
  }, [clicked]);
  return (
    <div id="cocktailContainer">
      <button
        onClick={() => {
          setClicked(true);
        }}
      >
        Get Cocktail
      </button>
      <p>{content}</p>
    </div>
  );
};
export default RandomCocktail;
