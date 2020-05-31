import { store } from 'react-notifications-component';
import fire from '../config/firebase';

const addProjectSuccess = (result) => ({
  type: 'ADD_PROJECT_SUCCESS',
  payload: result,
});
const addProjectError = (result) => ({
  type: 'ADD_PROJECT_ERROR',
  payload: result,
});
const deleteProjectSuccess = (result) => ({
  type: 'DELETE_PROJECT_SUCCESS',
  payload: result,
});
const deleteProjectError = (result) => ({
  type: 'DELETE_PROJECT_ERROR',
  payload: result,
});
const getProjectsSuccess = (result) => ({
  type: 'GET_PROJECTS_SUCCESS',
  payload: result,
});
const getProjectsError = (result) => ({
  type: 'GET_PROJECTS_ERROR',
  payload: result,
});
const editProjectSuccess = (result) => ({
  type: 'EDIT_PROJECT_SUCCESS',
  payload: result,
});

const editProjectError = (result) => ({
  type: 'EDIT_PROJECT_ERROR',
  payload: result,
});
export const addProject = (userId, object) => (dispatch) => {
  fire.database().ref(`users/${userId}`).child('projects').push(object, () => {
    dispatch(addProjectSuccess('push new project'));
    store.addNotification({
      title: 'Проект успешно добавлен',
      message: 'Установите код и начните звонить посетителям!',
      type: 'success',
      insert: 'top',
      container: 'bottom-center',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 8000,
        showIcon: true,
      },
    });
  })
    .catch((error) => dispatch(addProjectError(error)));
};


export const getProjects = (userId) => (dispatch) => {
  fire.database().ref(`users/${userId}`).child('projects').once('value')
    .then((snapshot) => snapshot.val())
    .then((result) => dispatch(getProjectsSuccess(result)))
    .catch((error) => dispatch(getProjectsError(error)));
};

export const editProject = (userId, hash, obj) => (dispatch) => {
  fire.database().ref(`users/${userId}`).child(`projects/${hash}`).child('_values')
    .update(obj)
    .then((result) => {
      store.addNotification({
        title: 'Проект изменен',
        message: 'Замените код на сайте на актуальный',
        type: 'success',
        insert: 'top',
        container: 'bottom-center',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 8000,
          showIcon: true,
        },
      });

      dispatch(editProjectSuccess(result));
    })
    .catch((error) => dispatch(editProjectError(error)));
};

export const deleteProject = (userId, hash) => (dispatch) => {
  fire.database().ref(`users/${userId}`).child(`projects/${hash}`)
    .remove()
    .then((result) => {
      dispatch(deleteProjectSuccess(result));
      store.addNotification({
        title: 'Проект удален',
        message: '...Но можно создать новый :)',
        type: 'warning',
        insert: 'top',
        container: 'bottom-center',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 8000,
          showIcon: true,
        },
      });
    })
    .catch((error) => dispatch(deleteProjectError(error)));
};
