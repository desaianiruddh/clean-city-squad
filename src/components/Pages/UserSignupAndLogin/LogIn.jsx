import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../../utilities/Forms";

import "./style.css";

const LogIn = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});
  const [showPassword] = useState(false);
  const navigate = useNavigate();

  const validateLogin = () => {
    let isValid = true;

    let validator = Form.validator({
      phone: {
        value: phone,
        isRequired: true,
        isDecimal: true,
        minLength: 10,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 8,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const authenticate = (e) => {
    e.preventDefault();

    const validate = validateLogin();

    if (validate) {
      setValidate({});
      setPhone("");
      setPassword("");
      alert("Successfully Login");
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-main-col d-flex justify-content-center">
        <div className="main ">
          <div className="auth-body text-color">
            <p className="my-4 fs-3">Login to your account</p>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={authenticate}
                autoComplete={"off"}
              >
                <div className="email mb-3">
                  <input
                    type="number"
                    className={`form-control ${
                      validate.validate && validate.validate.phone
                        ? "is-invalid "
                        : ""
                    }`}
                    id="phone"
                    name="phone"
                    value={phone}
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.phone
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.phone
                      ? validate.validate.phone[0]
                      : ""}
                  </div>
                </div>

                <div className="password mb-3">
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${
                        validate.validate && validate.validate.password
                          ? "is-invalid "
                          : ""
                      }`}
                      name="password"
                      id="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <div
                      className={`invalid-feedback text-start ${
                        validate.validate && validate.validate.password
                          ? "d-block"
                          : "d-none"
                      }`}
                    >
                      {validate.validate && validate.validate.password
                        ? validate.validate.password[0]
                        : ""}
                    </div>
                  </div>

                  <div className="extra mt-3 row justify-content-between">
                    <div className="col-6">
                      <div className="forgot-password space-password">
                        <Link to="/forget-pass">Forgot password?</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto my-4"
                  >
                    Log In
                  </button>
                </div>
              </form>

              <hr />
              <div className="auth-option text-center pt-2">
                No Account?{" "}
                <Link className="text-link spacing-link" to="/signup">
                  Sign up{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
