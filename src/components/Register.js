import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const Register = (props) => {
  const { open, close } = props;
  const [showRegis, setShowRegis] = useState(false);

  const openRegis = () => {
    setShowRegis(true);
  };
  const closeRegis = () => {
    setShowRegis(false);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className={open ? "register_wrap open" : "register_wrap"}>
      {open ? (
        <div className="registerModal_area">
          <div className="registerModal">
            <button className="closeBtn" onClick={close}>
              &times;
            </button>
            <div className="main">
              <h3>회원가입</h3>
              <Form
                name="normal_register"
                className="register-form"
                onFinish={onFinish}
              >
                <Form.Item
                  name="name"
                  rules={[
                    {
                      type: "name",
                      message: "이름을 제대로 입력해주세요!",
                    },
                    {
                      required: true,
                      message: "Please Input your Username",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Name"
                  />
                </Form.Item>
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
                <Form.Item className="regisBtnArea">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="regis-form-button"
                  >
                    회원가입
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Register;
