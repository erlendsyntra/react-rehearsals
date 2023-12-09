import { useEffect, useState } from "react";
import "./randomUsers.scss";

const RandomUsers = () => {
  const [data, setData] = useState([]);
  const [grid, setGrid] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await (
        await fetch("https://api.randomuser.me/?results=36")
      ).json();
      console.dir(data.results);
      setData(data.results);
    };
    getData();
  }, []);

  return (
    <div id="randomUsersContainer" className="wrapper">
      {data && (
        <>
          {data.map((el, i) => (
            <div className="person" key={i}>
              <img src={el.picture.large} alt="" />
              <p>
                {el.name.title}. {el.name.first} {el.name.last}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default RandomUsers;
