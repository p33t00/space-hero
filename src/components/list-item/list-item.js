import React from "react";
import './list-item.css';
import ListItemView from './list-item-view';
import Spinner from "../spinner";
import SWError from '../sw-error/swerror';

export default class ListItem extends React.Component {
	
	state = {
		itemData: null,
		loading: true,
		error: false
	}

	componentDidMount = () => {
		this.props.getData()
		.then(c => this.setState({itemData: c, loading: false}))
		.catch(e => this.setState({loading: false, error: true}));
	}

	render() {
		const {itemData, loading, error} = this.state;
		const content = loading ? <Spinner/> 
			: error ? <SWError /> : <ListItemView onItemChange={this.props.onItemChange} itemData={itemData} />;

		return (
			<div className="sh-list-item shadow-sm p-1 bg-black rounded">
				{content}
			</div>
		);
	}
}