import React from 'react';

import data from '../../DummyData.json';
import ViewComplaints from './ViewComplaints';

const AdminComplaintsWrapper = () => {
  return (
    <>
      <table border="0" className='m-3 mt-5'>
        <thead>
          <tr>
            <th style={{width : "5%"}}>Id</th>
            <th style={{width : "10%"}}>Name</th>
            <th style={{width : "15%"}}>complaintType</th>
            <th style={{width : "10%"}}>Area</th>
            <th style={{width : "30%"}}>Address</th>
            <th style={{width : "10%"}}>Latitude</th>
            <th style={{width : "10%"}}>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            const { id, name, complaintType, area, latitude, longitude, address1, address2 } = data;
            const address = address1 + ' '+address2 
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
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AdminComplaintsWrapper;
