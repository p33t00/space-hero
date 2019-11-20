import React from 'react';
import ListItem from '../list-item';
import ListItemWrap from '../hoc-components/list-item-wrap';
import { SwapiServiceConsumer } from '../../swapi-service-provider';
import withSwapiService from '../hoc-components/with-swapi-service';

// const swapi = new SwapiService();
// const { getAllPeople, getAllPlanets, getAllStarships } = swapi;

const PeopleList = () => {
	return (
		<SwapiServiceConsumer>
			{(swapi) => {return (ListItemWrap(ListItem, swapi.getAllPeople));}}
		</SwapiServiceConsumer>
	);
}
const PlanetList = () => {
	return (
		<SwapiServiceConsumer>
			{(swapi) => {return (ListItemWrap(ListItem, swapi.getAllPlanets));}}
		</SwapiServiceConsumer>
	);
}
const StarshipList = () => {
	return (
		<SwapiServiceConsumer>
			{(swapi) => {return (ListItemWrap(ListItem, swapi.getAllStarships));}}
		</SwapiServiceConsumer>
	);
}

export {
	PeopleList,
	PlanetList,
	StarshipList
}