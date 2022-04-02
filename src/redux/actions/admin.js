// import axios from 'axios';
import complaintJSON from '../../DummyData.json';

//get complaints list data for admin panel
export const fetchUserFromAPI = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    dispatch(fetchUserSuccess(complaintJSON));
    // try {
    //   const complaintData = await axios.get(complaintJSON);
    //   dispatch(fetchUserSuccess(complaintData));
    // } catch (error) {
    //   if (axios.isCancel(error)) console.log('caught cancel');
    //   else {
    //     const errMsg = error.message;
    //     dispatch(fetchUserFailed(errMsg));
    //   }
    // }
  };
};

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST',
  };
};

export const fetchUserFailed = (errMsg) => {
  return {
    type: 'FETCH_USER_FAILED',
    payload: errMsg,
  };
};

export const fetchUserSuccess = (complaintData) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: complaintData,
  };
};

export const showCloseComplaints = () => {
  return {
    type: 'SHOW_CLOSE_COMPLAINT',
  };
};

export const showOpenComplaints = () => {
  return {
    type: 'SHOW_OPEN_COMPLAINT',
  };
};

export const closeComplaint = (id) => {
  return {
    type: 'CLOSE_REQUEST',
    payload: id,
  };
};
