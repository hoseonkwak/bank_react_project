import "./set.css";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotLogin from "./components/NotLogin";

function App() {
  return (
    <>
      <div className="wrap">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NotLogin />} />
          </Routes>
        </BrowserRouter>
        <Menu />
      </div>
    </>
  );
}

export default App;
