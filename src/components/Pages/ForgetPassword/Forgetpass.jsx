import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../../utilities/Forms";
import "../UserSignupAndLogin/style.css";

const Forgot = () => {
  const [phone, setPhone] = useState("");
  const [validate, setValidate] = useState({});

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Form.validator({
      phone: {
        value: phone,
        isRequired: true,
        isDecimal: true,
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

  const forgotPassword = (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      alert("Reset password link is sent to " + phone);
      setValidate({});
      setPhone("");
    }
  };

  return (
    <div className="row g-0 auth-wrapper">
      <div className="auth-main-col d-flex justify-content-center">
        <div className="main space-pad">
          <div className="auth-body mx-auto text-color">
            <p>
              <h4>Forgot Password</h4>
            </p>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                onSubmit={forgotPassword}
                autoComplete={"off"}
              >
                <div className="email mb-3">
                  <input
                    type="phone"
                    className={`form-control ${
                      validate.validate && validate.validate.email
                        ? "is-invalid "
                        : ""
                    }`}
                    id="phone"
                    name="phone"
                    value={phone}
                    placeholder="Phone Number"
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
                      ? validate.validate.email[0]
                      : ""}
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto"
                  >
                    Forgot Password
                  </button>
                </div>
              </form>

              <hr />
              <div className="auth-option text-center pt-2">
                <Link className="text-link" to="/login">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
