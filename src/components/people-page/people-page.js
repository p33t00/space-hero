import React from 'react';
import ItemDetails from '../item-details';
import ListItem from '../list-item';

export default class PeoplePage extends React.Component {
    state = {
        characterID: null
    }

    onCharChange = (id) => {
        this.setState({characterID: id});
    }

    componentDidCatch() {
        // put error into state and use error component to display 
        console.error('errrororororo');
    }

    render() {
        const {characterID: charID} = this.state;   // getting characterID and setting into charID
        return (
        <div className="row d-flex my-sm-3 p-2 justify-content-between">
          <ItemDetails characterID={charID}/>
          <ListItem onCharChange={this.onCharChange} />
        </div>
        );
    }
}