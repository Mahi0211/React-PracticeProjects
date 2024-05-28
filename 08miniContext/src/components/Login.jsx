// import { useContext } from "react";
import { useState } from "react";
// import UserContext from "../context/UserContext";
import useUser from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);
    setUser({ userName, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="userName"
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;