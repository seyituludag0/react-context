import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  // console.log(user);
  const [loading, setLoading] = useState(false);
  function handleLogin() {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 2, userName: "emirhandgndmr", bio: "Java Developer" });
      setLoading(false);
    }, 1500);
  }

  const handleLogout = () => {
    setLoading(false);
    setUser()
  }
  return (
    <div>
      <code>{JSON.stringify(user)}</code> <br />
      <br />
      {
        !user && <button onClick={handleLogin}>{loading ? "loading..." : "Login"}</button>
      }

      {
        user && <button onClick={handleLogout}>{loading ? "loading..." : "Logout"}</button>
      }
    </div>
  );
}
