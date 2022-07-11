import { useState } from "react";
import Login from "./Login";

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
      😄로그인 해주세요!😍
      <button className="loginBtn" onClick={openLogin}>
        LOGIN
      </button>
      <Login open={showLogin} close={closeLogin}>
        ss
      </Login>
    </div>
  );
};

export default NotLogin;
