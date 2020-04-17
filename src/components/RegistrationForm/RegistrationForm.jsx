import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LanguageContext from '../../multilanguage/context';
import { languageList } from '../../multilanguage/translation';
import './_registrationForm.scss';
import { regist } from '../../actions/registration';


const RegistrationForm = ({ regist , registration}) => {
  const [form, setForm] = useState({
    email: null,
    password: null,
  });
  const handleChange = (name) => (e) => {
    setForm({ ...form, [name]: e.target.value });
  };
  const sumbitForm = () => (e) => {
    e.preventDefault();
    regist(form.email, form.password);
  };
  if (registration.operationType === 'signIn') {
    return <Redirect to="/dashboard"/>;
  }
  return <LanguageContext.Consumer>
    {({ language }) => (<form className="sign-in-form">
    <div className="text-center mb-3">
      <img src="/images/connector.png" width="85px" height="85px"></img>
    </div>
    <h3 className="text-center mb-3">{languageList[language].REGISTRATION_textHeader}</h3>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{languageList[language].REGISTRATION_emailText}</label>
      <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange('email')} />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">{languageList[language].REGISTRATION_emailPassword}</label>
      <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange('password')} />
    </div>
    <button type="submit" className="btn btn-primary-new btn-block" onClick={sumbitForm()}>{languageList[language].REGISTRATION_textButton}</button>
  </form>)}
  </LanguageContext.Consumer>;
};


const mapStateToProps = (state) => ({
  registration: state.registration,
});

const mapDispatchToProps = {
  regist,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
