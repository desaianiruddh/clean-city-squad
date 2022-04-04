import { useNavigate } from "react-router-dom";
const navigate=useNavigate();

const initialData = {
  showOtpVerificationPage: false,
  signedUpData: {},
};

const signUpReducer = (state = initialData, actions) => {
  const { type, payload } = action;
  switch (type) {
    case "POST_REQUEST_SUCCESS": {
      return {
        ...state,
        signedUpData: payload,
        otpVerificationPage: true,
      };
    }
    case "POST_REQUEST_FAILED": {
      console.log(payload);
      return {
        ...state,
      };
    }
    case "OTP_REQUEST_SUCCESS": {
        navigate('/user-dashboard')
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default signUpReducer;
