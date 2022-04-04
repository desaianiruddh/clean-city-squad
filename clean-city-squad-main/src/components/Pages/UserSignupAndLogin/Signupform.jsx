import React from "react";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import "./style.css";
import InputField from "./InputField";
import { postRequestForSignup } from "../../../redux/actions/signup";

const SignUpForm = (props) => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    phone_number: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("*Name is Required")
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
          .min(8, "*Insert Name with minimum 8 characters"),
        email: Yup.string()
          .email("*Email is Invalid")
          .required("*Email is Required"),
        phone_number: Yup.string()
          .required("*Phone Number is Required")
          .max(13, "Mobile No. should be 10 digit")
          .min(10, "Mobile No. should be 10 digit")
          .matches(
            /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/,
            "Only Indian Mobile number is Valid"
          ),
        password: Yup.string()
          .min(8, "*Password must be at least 8 characters")
          .required("*Password is Required"),
      })}
      onSubmit={(values) => {
        props.setIsSignedup(true);
        props.setPhoneNumber(values.phone_number)
        dispatch(postRequestForSignup(values));
      }}
    >
      {(formik) => (
        <div className=" d-flex justify-content-center mt-5">
          <div className="ms-4 mt-md-4 main  ">
            <div className="signup-header my-4 fs-3 text-primary">Sign Up</div>
            <div className=" ">
              <Form>
                <InputField label="Name" name="name" type="text" />
                <InputField label="Email" name="email" type="email" />
                <InputField label="Phone No" name="phone_number" type="text" />
                <InputField label="Password" name="password" type="password" />
                <button type="submit" className="btn btn-primary me-4 my-3">
                  Submit
                </button>
                <div className="auth-option text-center pt-2">
                  Have an account?
                  <Link className="my-4 text-link spacing-link" to="/login">
                    Sign in
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
