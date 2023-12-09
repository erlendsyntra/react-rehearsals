import clsx from "clsx";
import "./MyForm.css";
import { useState } from "react";

const MyForm = () => {
  const [firstName, setFirstName] = useState("Erlend");
  const [lastName, setLastName] = useState("Geerts");
  const [paragraph, setParagraph] = useState("");

  const formClass = clsx({
    disabled: paragraph ? true : false,
  });
  const paraClass = clsx({
    disabled: paragraph ? false : true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraph(`${firstName} ${lastName}`);
  };
  return (
    <div id="formContainer">
      <form onSubmit={handleSubmit} className={formClass}>
        <label htmlFor="fname">First:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lname">Last:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button>Send</button>
      </form>
      <p className={paraClass}>Hallo {paragraph}</p>
    </div>
  );
};
export default MyForm;
