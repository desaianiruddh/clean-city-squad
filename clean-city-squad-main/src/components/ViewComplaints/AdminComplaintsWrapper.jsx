import React from 'react';
import { useSelector } from 'react-redux';

import ViewComplaints from './ViewComplaints';

const AdminComplaintsWrapper = () => {
  const { complaintsData, isShowOpenComplaints } = useSelector(
    (state) => state
  );
  return (
    <>
      <div className="text-center fs-3 fw-bold text-decoration-underline">
        Complaints
      </div>
      <table border="0" className="m-5">
        <thead>
          <tr>
            <th style={{ width: '5%' }}>Id</th>
            <th style={{ width: '5%' }}>Name</th>
            <th style={{ width: '5%' }}>Type</th>
            <th style={{ width: '5%' }}>Area</th>
            <th style={{ width: '30%' }}>Address</th>
            <th style={{ width: '5%' }}>Latitude</th>
            <th style={{ width: '5%' }}>Longitude</th>
            {isShowOpenComplaints && <th style={{ width: '5%' }}>Status</th>}
          </tr>
        </thead>
        <tbody>
          {complaintsData.map((data) => {
            const {
              id,
              name,
              complaintType,
              area,
              latitude,
              longitude,
              address1,
              address2,
              status,
            } = data;
            const address = address1 + ' ' + address2;
            return (
              <ViewComplaints
                key={Math.random()}
                id={id}
                name={name}
                complaintType={complaintType}
                area={area}
                latitude={latitude}
                longitude={longitude}
                address={address}
                status={status}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AdminComplaintsWrapper;
