import React from 'react'
import PropTypes from 'prop-types';
import Input from '../Input';
import Search from '../Search';
import CallList from '../CallList/CallList';

const RecordsContainer = props => {
    return (
        <>
        <div className='row mr-2 mt-4 ml-2 justify-content-end'>
        <div className="col">
            <h4>Записи звонков</h4>
          </div>
          <div className="col-auto">
        
          </div>
        </div>
        <div className='row mr-2 ml-2 mt-3 calls-box'>
       <CallList/>
       </div>
       </>
    );
}

RecordsContainer.propTypes = {

}

export default RecordsContainer;
