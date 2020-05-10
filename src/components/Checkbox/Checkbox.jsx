import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';

const Checkbox = props => {
    return (
        <div сlassName="checkbox-wrapper">
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
            </div>
    )
}

Checkbox.propTypes = {

            }

export default Checkbox;
