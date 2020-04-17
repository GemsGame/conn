import React from 'react';
import LanguageContext from '../../multilanguage/context';
import {localStorageGet} from '../../services/localStorage';

const SelectLanguage = () =>
    <LanguageContext.Consumer>
        {({ updateLanguage }) => (
            <div className="input-group-sm">
                <select defaultValue={localStorageGet('language') ? localStorageGet('language'):'ENG'} className="custom-select" onChange={(e) => updateLanguage(e)}>
                    <option value="ENG">ENG</option>
                    <option value="RU">RU</option>
                </select>

            </div>
        )

        }

    </LanguageContext.Consumer>;


export default SelectLanguage;
