import React from 'react';
import ItemDetails from '../item-details';
import withSwapiService from '../hoc-components/with-swapi-service';
import ItemDetailsRow from './item-details-row';

const mapStarshipDetails = swapi => {return {getItemData: swapi.getStarship, getImgUrl:swapi.getStarshipsImgUrl} }

const StarshipDetails = (props) => {
	return (
		<ItemDetails {...props}>
			<ItemDetailsRow label={'name'} field={'name'}/>
			<ItemDetailsRow label={'model'} field={'model'}/>
			<ItemDetailsRow label={'starship class'} field={'starship_class'}/>
		</ItemDetails>
	);
}

export default withSwapiService(StarshipDetails, mapStarshipDetails);