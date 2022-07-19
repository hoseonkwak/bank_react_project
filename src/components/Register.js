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
  const { open, close } = props;
  const [showRegis, setShowRegis] = useState(false);

  const openRegis = () => {
    setShowRegis(true);
  };
  const closeRegis = () => {
    setShowRegis(false);
  };

  return (
    <div className={open ? "register_wrap open" : "register_wrap"}>
      {open ? (
        <div className="registerModal_area">
          <div className="registerModal">
            <button className="closeBtn" onClick={close}>
              &times;
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Register;
