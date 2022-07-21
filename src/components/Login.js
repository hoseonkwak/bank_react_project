import "antd/dist/antd.css";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { useState } from "react";
import Register from "./Register";
import getLogin from "../api/getLogin";

const Login = (props) => {
  const { open, close } = props;
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    pw: "",
  });

  const onFinish = () => {
    setLoginData({
      email: inputEmail,
      password: inputPw,
    });
    const call = async () => {
      const data = await getLogin(loginData);
      console.log(data);
      console.log(data.data.accessToken);
      localStorage.setItem(
        "loginHistory",
        JSON.stringify({
          displayName: data.data.user.displayName,
          accessToken: data.data.accessToken,
        })
      );
      window.location.replace("/");
    };
    call();
  };

  const [showRegis, setShowRegis] = useState(false);
  const oepnRegis = () => {
    setShowRegis(true);
  };
  const closeRegis = () => {
    setShowRegis(false);
  };
  // email 입력
  const handleChangeEmail = (e) => {
    setInputEmail(e.target.value);
  };
  // pw 입력
  const handleChangePw = (e) => {
    setInputPw(e.target.value);
  };

  return (
    <div className={open ? "open loginModalArea" : "loginModalArea"}>
      {open ? (
        <>
          <div className="loginModal">
            <button className="closeBtn" onClick={close}>
              &times;
            </button>
            <div className="main">
              <h3>login</h3>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "이메일을 제대로 입력해주세요!",
                    },
                    {
                      required: true,
                      message: "이메일을 입력해주세요!",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    type="email"
                    placeholder="E-mail"
                    onChange={handleChangeEmail}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "비밀번호를 입력해주세요!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    onChange={handleChangePw}
                  />
                </Form.Item>
                <Form.Item className="loginBtnArea">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    로그인
                  </Button>
                  또는{" "}
                  <span className="regisBtn" onClick={oepnRegis}>
                    회원가입
                  </span>
                </Form.Item>
              </Form>
            </div>
          </div>
        </>
      ) : null}
      <Register open={showRegis} close={closeRegis}></Register>
    </div>
  );
};

export default Login;
