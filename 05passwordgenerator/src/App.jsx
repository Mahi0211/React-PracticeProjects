import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    //console.log("render");
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);
  
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-6">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="allowNumbers">numbers?</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="includeChar">characters?</label>
        </div>
      </div>
    </div>
  );
}

export default App;

// import { useEffect, useRef, useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const renderCount = useRef(0);

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   }, [name])

//   return (
//     <>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <h1>Your Name is {name}</h1>
//       <h1>I rendered {renderCount.current}</h1>
//     </>
//   );
// }

// export default App;
