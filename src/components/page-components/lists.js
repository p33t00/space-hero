import SwapiService from '../../SwapiService';
import ListItem from '../list-item';
import ListItemWrap from '../hoc-components/list-item-wrap';

const swapi = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapi;

const PeopleList = ListItemWrap(ListItem, getAllPeople);
const PlanetList = ListItemWrap(ListItem, getAllPlanets);
const StarshipList = ListItemWrap(ListItem, getAllStarships);

export {
	PeopleList,
	PlanetList,
	StarshipList
}