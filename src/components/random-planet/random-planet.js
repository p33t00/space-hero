import React from 'react';
import './random-planet.css';
import SwapiService from '../../SwapiService';

export default class RandomPlanet extends React.Component {
    swapi = new SwapiService();
    maxPlanetID = 19;
    state = {
        planet: {id: null}
    };

    constructor() {
        super();
        this.initPlanet();
    }

    genRandID() {
        return Math.floor(Math.random() * this.maxPlanetID + 1);
    }

    updatePlanet = (planet) => {
        this.setState({planet});    // planet object has appropriate format and only "planet" is updated in state
    }
    
    initPlanet() {
        try {
            this.swapi.getPlanet(this.genRandID())
            .then(this.updatePlanet);   // don't need to explicitly pass response to updatePlanet
        } catch (e) {
            console.error(e);
        }
    }

    render () {
        const {planet: {id,name,created,terrain,population,rotationPeriod}} = this.state;
        return (
            <div className="sh-random-planet col-12 border border-secondary rounded-sm my-sm-4 p-2">
                <div className="row align-items-center">
                    <div className="col">
                        <img className="img-fluid mx-auto mx-sm-0 d-block" 
                            height="150" width="150" 
                            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                    </div>
                    <div className="col-auto mx-auto ml-sm-0 mr-sm-3 d-block">
                        <h3 className="h3">{name}</h3>
                        <ul>
                            <li>Population <span>{population}</span></li>
                            <li>Terrain <span>{terrain}</span></li>
                            <li>Rotation Period <span>{rotationPeriod}</span></li>
                            <li>Created <span>{created}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}