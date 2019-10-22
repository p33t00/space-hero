import React from "react";
import './list-item.css';
import SwapiService from "../../SwapiService";

export default class ListItem extends React.Component {
	swapi = new SwapiService();
	state = {
		characters: null
	}

	componentWillMount = () => {
		this.swapi.getAllPeople().then(c => this.setState({characters: c}));
	}
	
	formatCharacters = (chars) => {
		if(!chars) return null;
		return chars.map(c => {return <tr key={c.id}><td>{c.name}</td></tr>});
	}
	
	render() {
		const characters = this.formatCharacters(this.state.characters);
		return (
			<div className="sh-list-item col col-sm-auto shadow-sm order-sm-1 p-1 bg-black rounded">
				<table className="table table-hover table-sm">
					<tbody>
						{characters}
					</tbody>
				</table>
			</div>
		);
	}
}
