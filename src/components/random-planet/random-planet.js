import React from 'react';
import './random-planet.css';

export default class RandomPlanet extends React.Component {
    render () {
        return (
            <div className="sh-random-planet col-12 border border-secondary rounded-sm my-sm-4 p-2">
                <div className="row align-items-center">
                    <div className="col">
                        <img className="img-fluid mx-auto mx-sm-0 d-block" height="150" width="150" src="https://starwars-visualguide.com/assets/img/planets/2.jpg"/>
                    </div>
                    <div className="col-auto mx-auto ml-sm-0 mr-sm-3 d-block">
                        <h3 className="h3">Planet Earth</h3>
                        <ul>
                            <li>Population <span>1526505050</span></li>
                            <li>Diametr <span>000505050</span></li>
                            <li>Color <span>green-blue</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}