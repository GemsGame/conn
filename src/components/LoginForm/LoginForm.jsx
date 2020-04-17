import React, { useState } from 'react';
import { connect } from 'react-redux';
import LanguageContext from '../../multilanguage/context';
import { languageList } from '../../multilanguage/translation';
import './_loginForm.scss';
import { auth } from '../../actions/authentication';
import { Redirect } from 'react-router-dom';

const RegistrationForm = ({ auth, authentication }) => {
  const [form, setForm] = useState({
    email: null,
    password: null,
  });
  const handleChange = (name) => (e) => {
    setForm({ ...form, [name]: e.target.value });
  };

  const sumbitForm = () => (e) => {
    e.preventDefault();
    auth(form.email, form.password);
  };
  if (authentication.operationType === 'signIn') {
    return <Redirect to="/dashboard"/>;
  }
  return <LanguageContext.Consumer>
    {({ language }) => (<form className="sign-in-form">
    <div className="text-center mb-3">
      <img src="/images/connector.png" width="85px" height="85px"></img>
    </div>
    <h3 className="text-center mb-3">{languageList[language].LOGIN_textHeader}</h3>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{languageList[language].LOGIN_emailText}</label>
      <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange('email')} />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">{languageList[language].LOGIN_emailPassword}</label>
      <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange('password')} />
    </div>
    <button type="submit" className="btn btn-primary-new btn-block" onClick={sumbitForm()}>{languageList[language].LOGIN_textButton}</button>
  </form>)}
  </LanguageContext.Consumer>;
};


const mapStateToProps = (state) => ({
  authentication: state.authentication,
});

const mapDispatchToProps = {
  auth,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
