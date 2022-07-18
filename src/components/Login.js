import "antd/dist/antd.css";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = (props) => {
  const { open, close } = props;
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
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
                  또는 <Link to="/register">회원가입</Link>
                </Form.Item>
              </Form>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Login;
