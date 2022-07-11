const Login = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? "open loginModalArea" : "loginModalArea"}>
      {open ? (
        <>
          <div className="loginModal">
            <button className="closeBtn" onClick={close}>
              &times;
            </button>
            <div className="main">{props.children}</div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Login;
