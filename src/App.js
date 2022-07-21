import "./set.css";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotLogin from "./components/NotLogin";
import { useEffect } from "react";
import { useState } from "react";
import Account from "./components/Account";

function App() {
  const savedLoginHistory = localStorage.getItem("loginHistory");
  const initialLoginHistory = savedLoginHistory
    ? JSON.parse(savedLoginHistory)
    : [];
  const [loginHistory, setLoginHistory] = useState(initialLoginHistory);

  useEffect(() => {
    console.log(initialLoginHistory);
    console.log(loginHistory.length);
    if (loginHistory.length === 0) {
      return;
    }
  }, []);

  return (
    <>
      <div className="wrap">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={loginHistory.length === 0 ? <NotLogin /> : <Account />}
            />
            <Route path="*" element={<Navigate to="/" replace={false} />} />
          </Routes>
        </BrowserRouter>
        <Menu />
      </div>
    </>
  );
}

export default App;
