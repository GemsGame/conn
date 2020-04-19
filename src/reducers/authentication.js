export default function authentication(state = [], action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload;
    case 'LOGIN_ERROR':
      return state;
    default:
      return state;
  }
}
