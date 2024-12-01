import { useRef, useState } from "react";

function Ref() {
  let x = 0; // local variable

  const [y, setY] = useState(0); // State Variable

  const z = useRef(0); // Reference Variables

  function handleX() {
    x = x + 1;
    console.log(x);
  }

  function handleY() {
    setY(y + 1);
  }

  function handleZ() {
    z.current = z.current + 1;
    console.log("z:", z);
  }

  return (
    <div className="w-72 h-72 m-6 border border-red-500">
      <h1>X : {x}</h1>
      <button className="border m-6 border-black" onClick={handleX}>
        Increase X
      </button>

      <h1>Y : {y}</h1>
      <button className="border m-6 border-black" onClick={handleY}>
        Increase Y
      </button>

      <h1>Z : {z.current}</h1>
      <button className="border m-6 border-black" onClick={handleZ}>
        Increase Z
      </button>
    </div>
  );
}

export default Ref;
