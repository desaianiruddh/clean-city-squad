import { useState } from "react";
import Form from "../../../utilities/Forms";

import "./style.css";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [validate, setValidate] = useState({});

  const validateLogin = () => {
    let isValid = true;

    let validator = Form.validator({
      otp: {
        value: otp,
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
      setOtp("");

      alert("Successfully Login");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-main-col d-flex justify-content-center">
        <div className="main ">
          <div className="auth-body text-color">
            <p className="my-4 fs-3">
              <h4>OTP</h4>
            </p>
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
                      validate.validate && validate.validate.otp
                        ? "is-invalid "
                        : ""
                    }`}
                    id="otp"
                    name="otp"
                    value={otp}
                    placeholder="otp"
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <div className="extra mt-3 row justify-content-between">
                    <div className="col-6"></div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto my-4"
                  >
                    Verify
                  </button>
                </div>
              </form>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
