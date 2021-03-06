import React from "react";
import "./random-planet.css";
import RandPlanetView from "./random-planet-view";
import Spinner from "../spinner";
import SwapiService from "../../SwapiService";
import SWError from '../sw-error/swerror';

export default class RandomPlanet extends React.Component {
	swapi = new SwapiService();
    maxPlanetID = 19;
    randomPlanetID;

	state = {
		planet: null,
        loading: true,
        error: false
	};

    /**
     * Lifecycle hook
     */
    componentDidMount() {
        const {swithInterval} = this.props;
        this.initPlanet()
        this.randomPlanetID = setInterval(() => this.initPlanet(), swithInterval);
    }

    componentWillUnmount() {
        clearInterval(this.randomPlanetID);
        console.log('Random Planet COmponent Did Unmount');
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
            <div className="sh-random-planet no-gutters border border-secondary rounded-sm my-sm-4 p-2">
                {content}
            </div>
        );
	}
}

RandomPlanet.defaultProps = {
    swithInterval: 15000
}