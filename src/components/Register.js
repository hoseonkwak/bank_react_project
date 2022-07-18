import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [showRegis, setShowRegis] = useState(false);

  const openRegis = () => {
    setShowRegis(true);
  };
  const closeRegis = () => {
    setShowRegis(false);
  };

  return (
    <>
      <div className="register_wrap">
        <div className="registerModal_area">
          <div className="registerModal">
            <Link to="/" className="closeBtn">
              &times;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
