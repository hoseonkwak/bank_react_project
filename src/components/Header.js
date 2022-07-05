import User from "../img/user.png";

const Header = () => {
  return (
    <header className="main_header">
      <div className="profile">
        <a href="#">
          <img src={User} alt="profile" />
        </a>
      </div>
      <h3 className="account_name">생활비</h3>
      {/* <ul className="search_area">
        <li>
          <img src="./common/img/simple_payment.svg" alt="간편결제" />
        </li>
        <li>
          <img src="./common/img/search.svg" alt="검색" />
        </li>
      </ul> */}
    </header>
  );
};

export default Header;
