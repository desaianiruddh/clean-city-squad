import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "./newComplaint.css";
import closeBtn from "../../Images/close-icon.png";

const NewComplaint = (props) => {
  const positionObj = { latitude: 0, longitude: 0, locationError: "" };
  const SUPPORTED_FORMAT = ["image/png", "image/jpeg", "image/jpg"];
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      positionObj.locationError =
        "Geolocation is not supported by this browser.";
    }
  });
  const showPosition = (position) => {
    positionObj.latitude = position.coords.latitude;
    positionObj.longitude = position.coords.longitude;
  };
  const complaintSchema = Yup.object().shape({
    complaintType: Yup.string().required("complaint type is required"),
    address1: Yup.string().required("Required"),
    address2: Yup.string().required("Required"),
    files: Yup.mixed()
      .nullable()
      .required("Required")
      // .test(
      //   "FILE_SIZE",
      //   "Uploaded file is too big.",
      //   (value) => !value || (value && value.size <= 1 * 1024)
      // )
      .test(
        "FILE_FORMAT",
        "Uploaded file has unsupported format.",
        (value) => !value || (value && SUPPORTED_FORMAT.includes(value.type))
      ),
  });

  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <div className="container  form-wrapper">
        <button
          className="close-btn"
          onClick={() => {
            props.visible(false);
          }}
        >
          <img src={closeBtn} alt="close" />
        </button>
        <div className="text-center fw-bold display-5">Add New Complaint</div>
        <Formik
          initialValues={{
            name: "Kishan Karena",
            complaintType: "Select Complaint type",
            address1: "",
            address2: "",
            files: null,
          }}
          onSubmit={(values) => {
            props.visible(false);
            console.log("VALUES", values);
          }}
          validationSchema={complaintSchema}
        >
          {({
            values,
            setFieldValue,
            errors,
            touched,
            validateOnBlur,
            handleChange,
          }) => (
            <Form>
              <div className="my-2 fs-5">
                <label htmlFor="name">Name</label>
                <Field
                  className="form-control"
                  type="text"
                  name="name"
                  disabled
                />
              </div>

              <div className="my-2 fs-5">
                <label htmlFor="complaintType">Complaint Type</label>
                <Field
                  className="form-control"
                  as="select"
                  name="complaintType"
                  onChange={handleChange}
                >
                  <option value="">Select Complaint type</option>
                  <option value="Dustbin not lifted">Dustbin not lifted</option>
                  <option value="No Garbage Collected">
                    No Garbage Collected
                  </option>
                  <option value="Clean Toilet">Clean Toilet</option>
                  <option value="Open Gutter not cleaned">
                    Open Gutter not cleaned
                  </option>
                </Field>
                {touched.complaintType && errors.complaintType ? (
                  <div className="text-danger">{errors.complaintType}</div>
                ) : null}

                <div className="mx-5 fs-5"></div>
              </div>
              <div className="my-2 fs-5">
                <label htmlFor="address1">Address line-1</label>
                <Field className="form-control" type="text" name="address1" />
                {touched.address1 && errors.address1 ? (
                  <div className="text-danger">{errors.address1}</div>
                ) : null}
              </div>
              <div className="my-2 fs-5">
                <label htmlFor="address2">Address line-2</label>
                <Field className="form-control" type="text" name="address2" />
                {touched.address2 && errors.address2 ? (
                  <div className="text-danger">{errors.address2}</div>
                ) : null}
              </div>

              <div className="my-2 fs-5">
                <label htmlFor="files" className="text-center">
                  Add images of place
                </label>
                <input
                  name="files"
                  accept={["image/jpg", "image/jpeg", "image/png"]}
                  type="file"
                  multiple
                  onChange={(e) => {
                    setFieldValue("files", e.target.files[0]);
                  }}
                  values={values.files}
                />
              </div>
              {touched.files && errors.files ? (
                <div className="text-danger">{errors.files}</div>
              ) : null}
              <div className="d-flex justify-content-center ">
                <div className="mx-5 fs-5">
                  <label htmlFor="latitude">Latitude</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="latitude"
                    value={positionObj.latitude}
                    disabled
                  />
                </div>
                <div className="mx-5 fs-5">
                  <label htmlFor="longitude">Longitude</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="longitude"
                    value={positionObj.longitude}
                    disabled
                  />
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success mx-3 my-3">
                  Submit
                </button>
                <button type="reset" className="btn btn-secondary mx-3 my-3">
                  Reset
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewComplaint;
