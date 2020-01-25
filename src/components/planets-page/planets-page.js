import React from 'react';
import {PlanetList, PlanetDetails} from '../page-components';
import SWError from '../sw-error/swerror';

export default class PlanetsPage extends React.Component {
	state = {
		characterID: null,
		hasError: false
	};

	onItemChange = id => {
		this.setState({ characterID: id });
	};

	componentDidCatch(error, info) {
		// console.error(info);
		this.setState({ hasError: true });
	}

    render() {
        const {characterID: charID, hasError} = this.state;   // getting characterID and setting into charID
        if (hasError) { return <SWError/>; }
        return (
			<div className="sh-people-page my-sm-3 p-2 justify-content-between no-gutters">
				<PlanetList onItemChangeClbk={this.onItemChange}/>
				<PlanetDetails itemID={charID} />
			</div>
        );
    }
}
