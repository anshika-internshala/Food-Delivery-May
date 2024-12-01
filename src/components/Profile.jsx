import { useState, useEffect } from "react";
import userContext from "../utils/userContext";
import { useContext } from "react";

function Profile(props) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  const data = useContext(userContext);

  function updateCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("useEffect Functional Component");

    return () => {
      console.log("component has been removed from DOM");
    };
  }, [count]);

  useEffect(() => {}, []);

  return (
    <>
      <h1>Profile Functional Component</h1>
      <h2>{props.name}</h2>
      <h2>{count}</h2>
      <button className="border" onClick={updateCount}>
        UpdateCount
      </button>
      <h2>{data.loggedInUser}</h2>
      <input
        type="text"
        className="border"
        name=""
        id=""
        onChange={(e) => data.setUserName(e.target.value)}
      />
    </>
  );
}

export default Profile;
