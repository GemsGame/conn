import { store } from 'react-notifications-component';
import fire from '../config/firebase';
import { localStorageSet } from '../services/localStorage';
export const authSuccess = (response) => ({
  type: 'LOGIN_SUCCESS',
  payload: response,
});

export const authError = (error) => ({
  type: 'LOGIN_ERROR',
  payload: error,
});

export const auth = (email, password) => (dispatch) => {
  fire.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      store.addNotification({
        title: 'Login success!',
        message: `Your email: ${response.user.email}`,
        type: 'success',
        insert: 'top',
        container: 'bottom-center',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 5000,
          showIcon: true,
        },
      });
      dispatch(authSuccess(response));
      localStorageSet('authentication', response);
    })
    .catch((error) => {
      store.addNotification({
        title: error.code,
        message: error.message,
        type: 'danger',
        insert: 'top',
        container: 'bottom-center',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 5000,
          showIcon: true,
        },
      });

      dispatch(authError(error));
    });
};
