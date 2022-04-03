import { useState } from "react";
import "./style.css";
import Signupform from "./Signupform";
import Otp from "./Otp";

const Signup = () => {
  const [isSignedup, setIsSignedup] = useState(false);

  return (
    <>{isSignedup ? <Otp /> : <Signupform setIsSignedup={setIsSignedup} />}</>
  );
};

export default Signup;
