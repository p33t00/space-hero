import React from 'react';
import ItemDetails from '../item-details';
import withSwapiService from '../hoc-components/with-swapi-service';
import ItemDetailsRow from '../page-components/item-details-row';

const mapPeopleDetails = swapi => {return {getItemData: swapi.getPeople, getImgUrl:swapi.getPeopleImgUrl} }

const PersonDetails = (props) => {
	return (
		<ItemDetails {...props}>
			<ItemDetailsRow label={'name'} field={'name'}/>
			<ItemDetailsRow label={'gender'} field={'gender'}/>
			<ItemDetailsRow label={'birthdate'} field={'birth_year'}/>
		</ItemDetails>
	);
}

const StarshipDetails = () => {}

export default withSwapiService(PersonDetails, mapPeopleDetails);