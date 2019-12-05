import React from "react";
import Spinner from "../spinner";
import SWError from '../sw-error/swerror';
import SwapiService from '../../SwapiService';

const ListItemWrap = (View) => {
	return class extends React.Component {
		swapi = new SwapiService();
		state = {
			itemData: null,
			loading: true,
			hasError: false
		}

		componentDidMount = () => {
			this.props.getData()
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

export default ListItemWrap;