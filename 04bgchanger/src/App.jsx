import { useState } from "react";
import "./App.css";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function App() {
  const [color, setColor] = useState("olive");

  const changeColor = () => {
    let newColor = "#";
    for (let i = 1; i <= 6; i++) {
      newColor += randHexValue();
    }
    setColor(newColor);
    console.log(newColor)
  };

  const randHexValue = () => {
    let randomIndex = Math.floor(Math.random() * 16);
    return hex[randomIndex];
  };

  return (
    <div
      className="w-full h-screen duration-20"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={changeColor}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
