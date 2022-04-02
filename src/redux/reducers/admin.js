const initialData = {
  complaintsData : [],
  completed : false
}

const adminReducer = (state = initialData, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_USER_SUCCESS': {
      return {
        ...state,
        complaintsData : payload
      };
    }
    case 'FETCH_USER_FAILED': {
      console.log(payload);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default adminReducer;