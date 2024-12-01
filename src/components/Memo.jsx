import { useState, useMemo } from "react";
import { findPrime } from "../utils/helper";

function Memo() {
  const [number, setNumber] = useState("");

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const nthPrime = useMemo(() => findPrime(number), [number]);

  return (
    <>
      <div
        className="w-72 h-72 m-6 border border-red-500"
        style={
          isDarkTheme
            ? { backgroundColor: "lightgray" }
            : { backgroundColor: "white" }
        }
      >
        <input
          type="text"
          className="border m-2"
          onChange={(e) => setNumber(e.target.value)}
        />

        <h1>nth Prime Number is : {nthPrime}</h1>

        <button
          className="border m-6 border-black"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
}

export default Memo;
