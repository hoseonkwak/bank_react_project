import Home from "../img/home_icon.svg";
import MenuIcon2 from "../img/menu_icon.svg";
import Message from "../img/message_btn.svg";
import MenuBtn from "../img/menu_btn.svg";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu_area">
        <li className="on">
          <img src={Home} alt="home" />
        </li>
        <li>
          <img src={MenuIcon2} alt="거래내역" />
        </li>
        <li>
          <img src={Message} alt="메시지" />
        </li>
        <li>
          <img src={MenuBtn} alt="메뉴" />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
