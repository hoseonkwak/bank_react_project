import Home from "../img/home_icon.svg";
import MenuIcon2 from "../img/menu_icon.svg";
import Message from "../img/message_btn.svg";
import MenuBtn from "../img/menu_btn.svg";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu_area">
        <li className="on">
          <a href="#">
            <img src={Home} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={MenuIcon2} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Message} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={MenuBtn} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
