import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { OTPVerified } from "../../../redux/actions/signup";
import Form from "../../../utilities/Forms";

import "./style.css";

const Otp = ({phoneNumber}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [validate, setValidate] = useState({});

  const validateLogin = () => {
    let isValid = true;

    let validator = Form.validator({
      otp: {
        value: otp,
        isRequired: true,
        minLength: 4,
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
      navigate('/user-dashboard')
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-main-col d-flex justify-content-center">
        <div className="main ">
          <div className="auth-body text-color">
            <div className="my-4 fs-3">
              <div>OTP</div>
            </div>
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
                    placeholder="Enter Your OTP for verification"
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <div className="extra mt-2 row justify-content-between">
                    <div className="col-6"></div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto my-4"
                    onClick={()=>dispatch(OTPVerified(otp,phoneNumber))}
                  >
                    Verify
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
