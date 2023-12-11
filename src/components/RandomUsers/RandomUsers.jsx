import { useEffect, useState } from "react";
import "./randomUsers.scss";

const RandomUsers = () => {
  const [data, setData] = useState([]);

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

  // return (
  //   <div id="randomUsersContainer" className="wrapper">
  //     {data && (
  //       <>
  //         {data.map((el, i) => (
  //           <div className="person" key={i}>
  //             <img src={el.picture.large} alt="" />
  //             <p>
  //               {el.name.title}. {el.name.first} {el.name.last}
  //             </p>
  //           </div>
  //         ))}
  //       </>
  //     )}
  //   </div>
  // );
  return (
    <div id="randomUsersContainer" className="wrapper">
      {data && (
        <>
          {data.map((el, i) => (
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={el.picture.large}
                    alt="Avatar"
                    style={{ width: "128px", height: "128px" }}
                  />
                </div>
                <div className="flip-card-back">
                  <p>
                    {el.name.title}. {el.name.first} {el.name.last}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default RandomUsers;
