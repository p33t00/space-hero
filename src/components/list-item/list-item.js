import React from "react";
import './list-item.css';
import ListItemView from './list-item-view';
import Spinner from "../spinner";
import SwapiService from "../../SwapiService";
import SWError from '../sw-error/swerror';

export default class ListItem extends React.Component {
	swapi = new SwapiService();
	state = {
		characters: null,
		loading: true,
		error: false
	}

	componentDidMount = () => {
		this.swapi.getAllPeople()
		.then(c => this.setState({characters: c, loading: false}))
		.catch(e => this.setState({loading: false, error: true}));
	}
	onCharChange = (id) => {
		this.props.onCharChange(id);
	}

	render() {
		const {characters, loading, error} = this.state;
		const content = loading ? <Spinner/> 
			: error ? <SWError /> : <ListItemView onCharChange={this.onCharChange} characters={characters} />;

		return (
			<div className="sh-list-item shadow-sm p-1 bg-black rounded">
				{content}
			</div>
		);
	}
}
