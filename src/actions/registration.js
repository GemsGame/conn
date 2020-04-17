import { store } from 'react-notifications-component';
import fire from '../config/firebase';


export const registrationSuccess = (response) => ({
  type: 'REGISTRATION_SUCCESS',
  payload: response,
});

export const registrationError = (error) => ({
  type: 'REGISTRATION_ERROR',
  payload: error,
});

export const regist = (email, password) => (dispatch) => {
  fire.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => {
      store.addNotification({
        title: 'Registration success!',
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
      dispatch(registrationSuccess(response));
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
      dispatch(registrationError(error));
    });
};


/* .then(() => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          user.sendEmailVerification().then((email) => console.log('send'))
            .catch((error) => console.log(error));
        } else {
          //
        }
      }); */
