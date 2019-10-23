import React from "react";
import "./random-planet.css";
import RandPlanetView from "./random-planet-view";
import Spinner from "../spinner";
import SwapiService from "../../SwapiService";
import SWError from '../sw-error/swerror';

export default class RandomPlanet extends React.Component {
	swapi = new SwapiService();
	maxPlanetID = 19;
	state = {
		planet: null,
        loading: true,
        error: false
	};

    /**
     * Lifecycle hook
     */
    componentDidMount() {
        this.initPlanet()
        setInterval(() => this.initPlanet(), 15000);
    }

	genRandID() {
		return Math.floor(Math.random() * this.maxPlanetID + 1);
	}
    
	updatePlanet = planet => {
        this.setState({ planet, loading: false }); // planet object has appropriate format and only "planet" is updated in state
	};
    
    initError() {
        this.setState({loading: false, error: true});
    }

	initPlanet() {
        this.swapi.getPlanet(this.genRandID())
        .then(this.updatePlanet) // don't need to explicitly pass response to updatePlanet
        .catch(e => this.initError());
	}

	render() {
        const {planet,loading, error} = this.state;
		const content = loading ? <Spinner /> : 
            error ? <SWError/> : <RandPlanetView planet={planet}/>;

		return (
            <div className="sh-random-planet col-12 border border-secondary rounded-sm my-sm-4 p-2">
			    <div className="row align-items-center justify-content-center">
                    {content}
                </div>
            </div>
        );
	}
}