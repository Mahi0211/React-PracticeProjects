// import { useState } from 'react'
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0)

  let myObj = {
    name: "Mahin Pranave",
    age: 24,
    address: {
      city: "Nagercoil",
      state: "TamilNadu",
      country: "India",
    },
  };

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <>
      <h1 className="text-3xl bg-green-600 p-4 rounded-md">
        Vite with tailwind
      </h1>
      <Card
        username="Sofie"
        profile="https://images.unsplash.com/photo-1631947430066-48c30d57b943?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" myArr={newArr}
      />
      <Card
        username="Vincy"
        post="Staff Engineer"
        profile="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" newObj={myObj.name}
      />
      <Card
        username="Theedshika"
        profile="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </>
  );
}

export default App;
