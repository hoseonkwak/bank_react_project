import "./set.css";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotLogin from "./components/NotLogin";
import { useEffect } from "react";
import { useState } from "react";
import getLogin from "./api/getLogin";
import Register from "./components/Register";

function App() {
  const [loginData, setLoginData] = useState();

  useEffect(() => {
    const loginCall = async () => {
      const loginData = await getLogin();
    };
    //loginCall();
  });

  return (
    <>
      <div className="wrap">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NotLogin />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace={false} />} />
          </Routes>
        </BrowserRouter>
        <Menu />
      </div>
    </>
  );
}

export default App;
