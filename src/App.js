import React, { useState } from 'react';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import './App.scss';

import { Provider } from 'react-redux';
import ReactNotification from 'react-notifications-component';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { store } from './store/store';
import { localStorageGet, localStorageSet } from './services/localStorage';
import LanguageContext from './multilanguage/context';
import Registration from './pages/Registration';
import Login from './pages/Login';
import PrivateRout from './rout/PrivateRout';
import Main from './pages/Main';


function App() {
  const [language, setLanguage] = useState(localStorageGet('language') ? localStorageGet('language') : 'RU');
  const updateLanguage = (e) => {
    setLanguage(e.target.value);
    localStorageSet('language', e.target.value);
  };

  return (
    <div className="App">
      <Router>
        <ReactNotification />
        <Provider store={store}>
          <LanguageContext.Provider value={{
            language,
            updateLanguage,
          }}>
              <Switch>
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
              <PrivateRout path="/dashboard" component={Main} />
            </Switch>
          </LanguageContext.Provider>
        </Provider>
      </Router>
    </div>);
}
export default App;
