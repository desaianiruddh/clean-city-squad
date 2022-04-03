import React, { useState } from "react";

import NewComplaint from "../../NewComplaint/NewComplaint";
const UserDashBoard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const visibiltyHandler = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="container mt-5">
      <div className="ms-3">
        <h2>Complaints on site</h2>
      </div>
      <div className="row g-3">
        <div className="col-md-6 col-xl-4 pe-3">
          <div className="card">
            <div className="card-data">
              <h6 className="mb-4 text-decoration-underline">
                Total Complaint
              </h6>
              <div className="row d-flex align-items-center">
                <div className="col-9">
                  <h3 className="f-w-300 d-flex align-items-center m-b-0">
                    24995
                  </h3>
                </div>
                <div className="progress" style={{ height: "7px" }}>
                  <div
                    className="progress-bar bg-success "
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow="10"
                    aria-valuemin="80"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--[ daily sales section ] end-->
      <!--[ Monthly  sales section ] starts--> */}
        <div className="col-md-6 col-xl-4 pe-3">
          <div className="card">
            <div className="card-data">
              <h6 className="mb-4 text-decoration-underline">
                Resolved Complaints
              </h6>
              <div className="row d-flex align-items-center">
                <div className="col-9">
                  <h3 className="f-w-300 d-flex align-items-center  m-b-0">
                    22001
                  </h3>
                </div>
                <div className="col-3 text-right">
                  <p className="m-b-0">80%</p>
                </div>
              </div>
              <div className="progress m-t-30" style={{ height: "7px" }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--[ Monthly  sales section ] end-->
       <!--[ year  sales section ] starts--> */}
        <div className="col-md-12 col-xl-4 pe-3">
          <div className="card">
            <div className="card-data">
              <h6 className="mb-4 text-decoration-underline">
                Pending Complaints
              </h6>
              <div className="row d-flex align-items-center">
                <div className="col-9">
                  <h3 className="f-w-300 d-flex align-items-center  m-b-0">
                    1000
                  </h3>
                </div>
                <div className="col-3 text-right">
                  <p className="m-b-0">20%</p>
                </div>
              </div>
              <div className="progress" style={{ height: "7px" }}>
                <div
                  className="progress-bar  bg-info"
                  role="progressbar"
                  style={{ width: "20%" }}
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--[ year  sales section ] end-->
      <!--[ Recent Users ] start--> */}
        <div>
          <h3>My Dashboard</h3>
        </div>
        <div className="col-xl-8 col-md-6 pe-3">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div>
                <h5>History</h5>
              </div>
              <div>
                <h5>Is area cleaned?</h5>
              </div>
            </div>
            <div className="card-data px-0 py-3">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr className="unread d-flex justify-content-between">
                      <td>
                        <h6 className="mb-1">Area</h6>
                        <p className="m-0">Complaint</p>
                      </td>
                      <td>
                        <div className="d-flex">
                          <div>
                            <button className="btn verification-btn btn-success mx-1 f-12 ">
                              Yes
                            </button>
                          </div>
                          <div>
                            <button className="btn verification-btn btn-danger mx-1 f-12">
                              No
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <!--[ Recent Users ] end-->
      <!-- [ statistics year chart ] start --> */}
        <div className="col-xl-4 col-md-6">
          <div className="card mb-4">
            <div className="card-data">
              <div className="row">
                <div className="col">
                  <h5 className="m-0 text-decoration-underline">
                    Your total complaint
                  </h5>
                </div>
              </div>
              <h2 className="mt-3 f-w-300">45</h2>
              <h6 className="text-muted mt-4 mb-0">
                You can raise new complaint
              </h6>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-data border-bottom">
              <div className="row d-flex align-items-center">
                <div className="col">
                  <h3 className="f-w-300">235</h3>
                  <span className="d-block text-decoration-underline">
                    Resolved
                  </span>
                </div>
              </div>
            </div>
            <div className="card-data">
              <div className="row d-flex align-items-center">
                <div className="col">
                  <h3 className="f-w-300">26</h3>
                  <span className="d-block text-decoration-underline">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => {
            setIsVisible(true);
          }}
          className="btn btn-success my-4"
        >
          Raise new complaint
        </button>
      </div>
      {isVisible && <NewComplaint visible={visibiltyHandler} />}
    </div>
  );
};

export default UserDashBoard;
