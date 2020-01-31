import React from 'react';
import { withRouter } from 'react-router-dom';
import {StarshipList} from '../page-components';

const StarshipsPage = (props) => {
    return (
        <div className="sh-people-page my-sm-3 p-2 justify-content-between no-gutters">
            <StarshipList onItemChangeClbk={itemID => props.history.push(itemID)}/>
        </div>
    );
}

export default withRouter(StarshipsPage);