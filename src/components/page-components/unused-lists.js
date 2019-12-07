import ListItem from '../list-item';
import ListItemWrap from '../hoc-components/list-item-wrap';
import withSwapiService from '../hoc-components/with-swapi-service';
import ListItemElementView from '../people-page/list-item-element-view';
import compose from '../hoc-helpers/compose';

const mapPeopleList = swapi => {return {getData: swapi.getAllPeople} }
const withSwapiServiceNProps = (Comp) => withSwapiService(Comp, mapPeopleList);

// const PlanetList = () => {
// 	return (
// 		<SwapiServiceConsumer>
// 			{(swapi) => {return (ListItemWrap(ListItem, swapi.getAllPlanets));}}
// 		</SwapiServiceConsumer>
// 	);
// }
// const StarshipList = () => {
// 	return (
// 		<SwapiServiceConsumer>
// 			{(swapi) => {return (ListItemWrap(ListItem, swapi.getAllStarships));}}
// 		</SwapiServiceConsumer>
// 	);
// }

export default compose(ListItem, ListItemWrap, withSwapiServiceNProps)(ListItemElementView);
// export default withSwapiServiceNProps(ListItemWrap(ListItem(ListItemElementView)));