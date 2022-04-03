import axios from "axios";

export const postRequest = () => {
  return {
    type: "POST_REQUEST",
  };
};

export const postRequestFailed = (errMsg) => {
  return {
    type: "POST_REQUEST_FAILED",
    payload: errMsg,
  };
};

export const postRequestSuccess = (signedUpData) => {
  return {
    type: "POST_REQUEST_SUCCESS",

    payload: signedUpData,
  };
};
export const otpRequestSuccess = () => {
    return {
      type: "OTP_REQUEST_SUCCESS",
    };
  };
export const postRequestForSignup = (values) => {
  return async (dispatch) => {
    dispatch(postRequest());
    try {
      await axios.post(
        "https://binarybrains.simform.solutions/api/register",
        values
      );
      dispatch(postRequestSuccess(values));
    } catch (error) {
      if (axios.isCancel(error)) console.log("caught cancel");
      else {
        const errMsg = error.message;
        dispatch(postRequestFailed(errMsg));
      }
    }
  };
};
export const OTPVerified = (otp,phone_number) => {
    return async (dispatch) => {
      dispatch(postRequest());
      try {
        await axios.post(
          "https://binarybrains.simform.solutions/otp/verify",
          {"otp_number" : otp, "phone_number" : phone_number}
        );
        dispatch(otpRequestSuccess());
      } catch (error) {
        if (axios.isCancel(error)) console.log("caught cancel");
        else {
          const errMsg = error.message;
          dispatch(postRequestFailed(errMsg));
        }
      }
    };
  };
