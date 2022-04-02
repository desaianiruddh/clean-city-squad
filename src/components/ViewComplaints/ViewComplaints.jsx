import React from 'react';

const ViewComplaints = (props) => {
  const { id, name, complaintType, area, latitude, longitude, address } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{complaintType}</td>
      <td>{area}</td>
      <td>{address}</td>
      <td>{latitude}</td>
      <td>{longitude}</td>
    </tr>
  );
};

export default ViewComplaints;
