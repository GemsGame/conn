import fire from '../config/firebase';

const getBalanceSuccess = (result) => ({
  type: 'GET_BALANCE_SUCCESS',
  payload: result,
});
const getBalanceError = (result) => ({
  type: 'GET_BALANCE_ERROR',
  payload: result,
});

export const getBalance = (userId) => (dispatch) => {
  fire.database().ref(`users/${userId}`).child('balance').once('value')
    .then((data) => data.val())
    .then((result) => dispatch(getBalanceSuccess(result)))
    .catch((err) => dispatch(getBalanceError(err)));
};
