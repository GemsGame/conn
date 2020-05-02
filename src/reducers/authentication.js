export default function authentication(state = [], action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload;
    case 'LOGIN_ERROR':
      return state;
    case 'OUT_SUCCESS':
      return [];
    default:
      return state;
  }
}
