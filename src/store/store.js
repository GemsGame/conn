import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../redusers/rootReducer';

import { localStorageGet } from '../services/localStorage';

const localAuth = localStorageGet('authentication');
let storage = Object;
if (localAuth) {
  storage = localAuth;
} else {
  storage = { status: false };
}
export const store = createStore(rootReducer, { authentication: storage }, composeWithDevTools(applyMiddleware(thunk)));
