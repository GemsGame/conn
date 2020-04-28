import fire from '../config/firebase';

export const elementsCountSuccess = (result) => ({
  type: 'GET_STAT_ELEMENTS_COUNT_SUCCESS',
  payload: result,
});
export const elementsCountError = (result) => ({
  type: 'GET_STAT_ELEMENTS_COUNT_ERROR',
  payload: result,
});


export const getStatisticSuccess = (result) => ({
  type: 'GET_STAT_ELEMENTS_COUNT_SUCCESS',
  payload: result,
});
export const getStatisticError = (result) => ({
  type: 'GET_STAT_ELEMENTS_COUNT_ERROR',
  payload: result,
});

export const getStatistic = (userId) => (dispatch) => {
  fire.database().ref(`users/${userId}`).once('value')
    .then((data) => data.val())
    .then((result) => dispatch(getStatisticSuccess(result)))
    .catch((err) => dispatch(getStatisticError(err)));
};


export const elementsCount = (userId, project = 'default', action = 'calls') => (dispatch) => {
  fire.database().ref(`users/${userId}`).child('statistic').child('projects')
    .child(project)
    .child(action)
    .once('value')
    .then((data) => data.numChildren())
    .then((result) => dispatch(elementsCountSuccess({ [project]: { [action]: result } })))
    .catch((err) => dispatch(elementsCountError(err)));
};


export const getAllElements = (userId) => (dispatch) => {
  const elements = {};
  fire.database().ref(`users/${userId}`).child('statistic').child('projects')
    .once('value')
    .then((result) => result.forEach((element) => {
      element.forEach((v) => {
        elements[element.key] = { ...elements[element.key], [v.key]: v.numChildren() };
      });
    }))
    .then(() => dispatch(elementsCountSuccess(elements)));
};



export const countAnswersCalls = (userId) => (dispatch) => {
  const elements = {};
  fire.database().ref(`users/${userId}`).child('statistic').child('projects')
    .once('value')
    .then((result) => result.forEach((element) => {
      element.forEach((v) => {
        //if(v.key === 'calls' || v.key === "answers") {
          
        //}
        elements[element.key] = { ...elements[element.key], [v.key]: v.val() };
      });
    }))
    .then(() => dispatch(elementsCountSuccess(elements)));
};
