// import { useContext } from "react";
// import UserContext from "../context/UserContext";
import useUser from "../context/UserContext";

function Profile() {
  const { user } = useUser();

  if (!user) return <h1>Not logged in yet</h1>;

  return (
    <div>
      <h1>Profile: {user.userName}</h1>
    </div>
  );
}

export default Profile;