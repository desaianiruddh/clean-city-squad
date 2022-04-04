import axios from "axios";

const header = {
  Authorization: "Bearer 11|GSF10b63zVK0aUREVF32rlv2hIHFBjezD1p6uTkV",
};
//get complaints list data for admin panel
export const fetchUserFromAPI = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const complaintData = await axios.get(
        "http://5e5e-14-99-102-226.ngrok.io/api/getallComplaints",
        {
          headers: header,
        }
      );
      dispatch(fetchUserSuccess(complaintData.data));
    } catch (error) {
      if (axios.isCancel(error)) console.log("caught cancel");
      else {
        const errMsg = error.message;
        dispatch(fetchUserFailed(errMsg));
      }
    }
  };
};

export const fetchUserRequest = () => {
  return {
    type: "FETCH_USER_REQUEST",
  };
};

export const fetchUserFailed = (errMsg) => {
  return {
    type: "FETCH_USER_FAILED",
    payload: errMsg,
  };
};

export const fetchUserSuccess = (complaintData) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: complaintData,
  };
};

export const showCloseComplaints = () => {
  return {
    type: "SHOW_CLOSE_COMPLAINT",
  };
};

export const showOpenComplaints = () => {
  return {
    type: "SHOW_OPEN_COMPLAINT",
  };
};

export const closeComplaint = (id) => {
  return {
    type: "CLOSE_REQUEST",
    payload: id,
  };
};

export const postRequestForUpdateStatus = (id) => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      await axios.post(
        "https://binarybrains.simform.solutions/" + id,
        { status: "1" },
        {
          headers: {
            Authorization: "Bearer 11|GSF10b63zVK0aUREVF32rlv2hIHFBjezD1p6uTkV",
          },
        }
      );
      dispatch(closeComplaint(id));
    } catch (error) {
      if (axios.isCancel(error)) console.log("caught cancel");
      else {
        const errMsg = error.message;
        dispatch(fetchUserFailed(errMsg));
      }
    }
  };
};
