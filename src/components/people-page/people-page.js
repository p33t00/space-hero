import React from 'react';
import './people-page.css';
import {PeopleList, PersonDetails} from '../page-components';
import { withRouter } from 'react-router-dom';

const PeoplePage = (props) => {
	return (
		<div className="sh-people-page my-sm-3 p-2 justify-content-between no-gutters">
			<PeopleList onItemChangeClbk={(id) => {props.history.push(id)}} />
			<PersonDetails itemID={props.match.params.id} />
		</div>
	);
}

export default withRouter(PeoplePage);