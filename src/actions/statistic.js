import fire from '../config/firebase';

export const getStatisticSuccess = (result) => ({
  type: 'STATISTIC_GET_SUCCESS',
  payload: result,
});
export const getStatisticError = (result) => ({
  type: 'STATISTIC_GET_ERROR',
  payload: result,
});

export const getStatistic = (userId) => (dispatch) => {

  fire.database().ref(`users/${userId}`).once('value')
    .then((data) => data.val())
    .then((result) => dispatch(getStatisticSuccess(result)))
    .catch((err) => dispatch(getStatisticError(err)));
};
