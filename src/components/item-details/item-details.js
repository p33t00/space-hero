import React from 'react';
import './item-details.css';

export default class ItemDetails extends React.Component {
    render () {
        return (
            <div className="sh-item-details order-sm-2 col-12 col-sm-8 ml-auto mb-4">
                <div className="row justify-content-center justify-content-sm-end">
                    <img className="img-thumbnail" src="https://starwars-visualguide.com/assets/img/characters/9.jpg"/>
                    <div className="">
                            <ul>
                                <li>Gender: <span>male</span></li>
                                <li>Age: <span>55</span></li>
                            <li>Color: <span>white</span></li>
                            </ul>
                    </div>
                </div>
            </div>
        );
    }
}