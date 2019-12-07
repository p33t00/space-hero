import React from 'react';
import ItemDetails from '../item-details';
import withSwapiService from '../hoc-components/with-swapi-service';
import ItemDetailsRow from './item-details-row';

const mapStarshipDetails = swapi => {return {getItemData: swapi.getStarship, getImgUrl:swapi.getStarshipsImgUrl} }

const StarshipDetails = (props) => {
	return (
		<ItemDetails {...props}>
			<ItemDetailsRow label={'name'} field={'name'}/>
			<ItemDetailsRow label={'diameter'} field={'diameter'}/>
			<ItemDetailsRow label={'population'} field={'population'}/>
		</ItemDetails>
	);
}

export default withSwapiService(StarshipDetails, mapStarshipDetails);