import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const NotLogin = () => {
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
  };
  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="notLogin">
      ๐๋ก๊ทธ์ธ ํด์ฃผ์ธ์!๐
      <button className="loginBtn" onClick={openLogin}>
        LOGIN
      </button>
      <Login open={showLogin} close={closeLogin}></Login>
    </div>
  );
};

export default NotLogin;
