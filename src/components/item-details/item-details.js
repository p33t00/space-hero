import React from 'react';
import './item-details.css';
import ItemDetailsView from './item-details-view';
import SwapiService from "../../SwapiService";
import SWError from '../sw-error/swerror';

export default class ItemDetails extends React.Component {
    swapi = new SwapiService();
    state = {
        character: null
    }

    componentDidUpdate(prevProps) {
        if (this.props === prevProps) return;

        this.swapi.getPeople(this.props.characterID)
        .then((c) => {this.setState({character: c})});
    }

    render () {
        const content = this.state.character ? <ItemDetailsView character={this.state.character} /> : <span>Select Character</span>;
        return (
            <div className="sh-item-details mb-4">
                    {content}
            </div>
        );
    }
}