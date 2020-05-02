const messages = (state = [], action) => {
  switch (action.type) {
    case 'GET_MESSAGES_SUCCESS':
      return action.payload;
    case 'GET_MESSAGES_ERROR':
      return action.payload;
    default:
      return state;
  }
};


export default messages;
