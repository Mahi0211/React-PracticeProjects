import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { UserProvider } from "./context/UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserProvider value={{ user, setUser }}>
      <h1>React Video for Context API</h1>
      <Login />
      <Profile />
    </UserProvider>
  );
}

export default App;
