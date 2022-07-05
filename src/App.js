import logo from "./logo.svg";
import "./set.css";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <div className="wrap">
        <Header />
        <Menu />
      </div>
    </>
  );
}

export default App;
