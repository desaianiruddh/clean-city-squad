import { useState } from "react";
import "./style.css";
import Signupform from "./Signupform";
import Otp from "./Otp";

const Signup = () => {
  const [isSignedup, setIsSignedup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      {isSignedup ? (
        <Otp phoneNumber={phoneNumber} />
      ) : (
        <Signupform
          setIsSignedup={setIsSignedup}
          setPhoneNumber={setPhoneNumber}
        />
      )}
    </>
  );
};

export default Signup;
