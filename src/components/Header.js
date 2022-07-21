import User from "../img/user.png";

const Header = () => {
  const savedLoginHis = localStorage.getItem("loginHistory");
  const initialLoginHistory = savedLoginHis ? JSON.parse(savedLoginHis) : [];

  const removeLocal = () => {
    localStorage.removeItem("loginHistory");
    window.location.replace("/"); // 새로고침
  };
  return (
    <header className="main_header">
      <div className="profile">
        <img src={User} alt="profile" />
      </div>
      <h3 className="account_name">
        {savedLoginHis ? initialLoginHistory.displayName + "님" : ""} 계좌
      </h3>
      {/* <ul className="search_area">
        <li>
          <img src="./common/img/simple_payment.svg" alt="간편결제" />
        </li>
        <li>
          <img src="./common/img/search.svg" alt="검색" />
        </li>
      </ul> */}
      <button className="logoutBtn" onClick={removeLocal}>
        로그아웃
      </button>
    </header>
  );
};

export default Header;
