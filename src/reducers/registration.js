
export default function registration(state = [], action) {
  switch (action.type) {
    case 'REGISTRATION_SUCCESS':
      return action.payload;
    case 'REGISTRATION_ERROR':
      return action.payload;
    default:
      return state;
  }
}
