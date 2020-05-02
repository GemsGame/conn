import fire from '../config/firebase';

const getMessagesSuccess = (result) => ({
  type: 'GET_MESSAGES_SUCCESS',
  payload: result,
});
const getMessagesError = (result) => ({
  type: 'GET_MESSAGES_ERROR',
  payload: result,
});

const updateMessageSuccess = (result) => ({
  type: 'UPDATE_MESSAGES_SUCCESS',
  payload: result,
});

const updateMessageError = (result) => ({
  type: 'UPDATE_MESSAGES_ERROR',
  payload: result,
});
export const getMessages = (userId) => (dispatch) => {
  fire.database().ref(`users/${userId}`).child('messages').once('value')
    .then((data) => data.val())
    .then((result) => dispatch(getMessagesSuccess(result)))
    .catch((err) => dispatch(getMessagesError(err)));
};

export const updateMessage = (userId, messId) => (dispatch) => {
  fire.database().ref(`users/${userId}`).child('messages').child(messId)
    .update({ viewed: true })
    .then((resolve) => dispatch(updateMessageSuccess(resolve)))
    .catch((err) => dispatch(updateMessageError(err)));
};
