import React from 'react';
import './sw-error.css';
import errIcon from './cancel.png';

const SWError = function() {
    return(
        <div className="sw-error col">
            <div>
                <img className="img-fluid" src={errIcon} alt="error icon"/>
            </div>
            <div>
                <h3>....Oooopsie</h3>
            </div>
            <div>
                <span>
                    Something went definitely wrong here.
                </span>
            </div>
        </div>
    );
}

export default SWError;