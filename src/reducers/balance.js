const balance = (state = [], action) => {
  switch (action.type) {
    case 'GET_BALANCE_SUCCESS':
      return action.payload;
    case 'GET_BALANCE_ERROR':
      return action.payload;
    default:
      return state;
  }
};


export default balance;
