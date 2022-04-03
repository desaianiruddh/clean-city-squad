export const submitForm = (values) => {
    return {
      type: 'SUBMIT_FORM',
      payload: {
        ...values,
      },
    };
  };
  
  export const logOut = () => {
    return {
      type: 'LOG_OUT',
    };
  };