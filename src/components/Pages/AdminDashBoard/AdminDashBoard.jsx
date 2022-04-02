import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import {
  showOpenComplaints,
  showCloseComplaints,
} from '../../../redux/actions/admin';
import AdminComplaintsWrapper from '../../ViewComplaints/AdminComplaintsWrapper';
import './adminDashBoard.css';

const AdminDashBoard = () => {
  const dispatch = useDispatch();
  const [showOpenRequest, setShowOpenRequest] = useState(true);
  return (
    <div>
      {window.innerWidth > 990 ? (
        <div>
          <div className="mt-3 me-5 d-flex justify-content-end">
            <ButtonGroup size="lg" className="mb-2">
              <Button className="bg-dark border-dark text-white" disabled>
                <span className="fs-4 mt-2 me-2">Request filter</span>
              </Button>
              <Button
                className={
                  showOpenRequest
                    ? 'bg-primary shadow-none'
                    : 'bg-white text-dark border-dark'
                }
                onClick={() => {
                  dispatch(showOpenComplaints());
                  setShowOpenRequest(true);
                }}
              >
                Open
              </Button>
              <Button
                className={
                  showOpenRequest
                    ? 'bg-white text-dark border-dark'
                    : 'bg-primary shadow-none'
                }
                onClick={() => {
                  dispatch(showCloseComplaints());
                  setShowOpenRequest(false);
                }}
              >
                Close
              </Button>
            </ButtonGroup>
          </div>
          <AdminComplaintsWrapper showOpenRequest={showOpenRequest} />
        </div>
      ) : (
        <div className="fs-4 mt-5 text-center text-danger">
          Please Open Admin Panel in Desktop
        </div>
      )}
    </div>
  );
};

export default AdminDashBoard;
