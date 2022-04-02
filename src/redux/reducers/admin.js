const initialData = {
  complaintsData: [],
  completed: false,
  isShowOpenComplaints: true,
};

const adminReducer = (state = initialData, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_USER_SUCCESS': {
      return {
        ...state,
        complaintsData: payload,
      };
    }
    case 'FETCH_USER_FAILED': {
      console.log(payload);
      return {
        ...state,
      };
    }
    case 'SHOW_OPEN_COMPLAINT': {
      return {
        ...state,
        isShowOpenComplaints: true,
      };
    }
    case 'SHOW_CLOSE_COMPLAINT': {
      return {
        ...state,
        isShowOpenComplaints: false,
      };
    }
    case 'CLOSE_REQUEST': {
      return {
        ...state,
        complaintsData: state.complaintsData.map((data) => {
          if (payload === data.id) {
            return {
              ...data,
              status: true,
            };
          }
          return data;
        }),
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
