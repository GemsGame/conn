import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import SelectLanguage from '../../components/SelectLanguage';
import './_login.scss';

const Registration = () => (
    <div className="container-fluid vh-100">
        <div className="row language justify-content-end">
            <div className="col text-right col-1 mt-2">
            
            </div>
        </div>
        <div className="row">
            <div className="col mx-auto my-auto">  
            <RegistrationForm/>
            </div>
        </div>
    </div>
);
export default Registration;
