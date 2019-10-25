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
        this.foo.fdsa();
        if (this.props === prevProps) return;

        this.swapi.getPeople(this.props.characterID)
        .then((c) => {this.setState({character: c})});
    }

    render () {
        const content = this.state.character ? <ItemDetailsView character={this.state.character} /> : <span>Select Character</span>;
        return (
            <div className="sh-item-details order-sm-2 col-12 col-sm-8 ml-auto mb-4">
                <div className="row justify-content-center justify-content-sm-end">
                    {content}
                    {/* <img className="img-thumbnail" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
                    <div>
                            <ul>
                                <li>Name: <span>{name}</span></li>
                                <li>Gender: <span>{gender}</span></li>
                                <li>Birthdate: <span>{birth_year}</span></li>
                                <li>Eye Color: <span>{eye_color}</span></li>
                            </ul>
                    </div> */}
                </div>
            </div>
        );
    }
}