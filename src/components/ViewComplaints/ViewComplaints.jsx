import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { closeComplaint } from '../../redux/actions/admin';

const ViewComplaints = (props) => {
  const dispatch = useDispatch();
  const isShowOpenComplaints = useSelector(
    (state) => state.isShowOpenComplaints
  );
  const {
    id,
    name,
    complaintType,
    area,
    latitude,
    longitude,
    address,
    status,
  } = props;

  return (
    <>
      {isShowOpenComplaints !== status &&
        (status ? (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{complaintType}</td>
            <td>{area}</td>
            <td>{address}</td>
            <td>{latitude}</td>
            <td>{longitude}</td>
          </tr>
        ) : (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{complaintType}</td>
            <td>{area}</td>
            <td>{address}</td>
            <td>{latitude}</td>
            <td>{longitude}</td>
            <td>
              <Button onClick={() => dispatch(closeComplaint(id))}>
                Completed
              </Button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default ViewComplaints;
