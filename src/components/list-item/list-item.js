import React from "react";
import './list-item.css';
import ListItemView from './list-item-view';
import Spinner from "../spinner";
import SWError from '../sw-error/swerror';
import SwapiService from '../../SwapiService';

const swapi = new SwapiService();

const ListItemWrap = (View, dataProvider) => {
	return class extends React.Component {
		state = {
			itemData: null,
			loading: true,
			hasError: false
		}

		componentDidMount = () => {
			dataProvider()
			.then(c => this.setState({itemData: c, loading: false}))
			.catch(e => this.setState({loading: false, hasError: true}));
		}

		render() {
			const {itemData, loading, hasError} = this.state;
			const content = loading ? <Spinner/> 
				: hasError ? <SWError /> : <View itemData={itemData} onItemChange={this.props.onItemChangeClbk}/>;
			
			return content;
		}
	}
}



export default ListItemWrap(ListItemView, swapi.getAllPeople);