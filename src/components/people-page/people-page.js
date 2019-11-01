import React from 'react';
import ItemDetails from '../item-details';
import ListItem from '../list-item';
import SWError from '../sw-error/swerror';

export default class PeoplePage extends React.Component {
    state = {
        characterID: null,
        hasError: false
    }

    onCharChange = (id) => {
        this.setState({characterID: id});
    }

    componentDidCatch(error, info) {
        // console.error(info);
        this.setState({hasError: true});
    }

    render() {
        const {characterID: charID, hasError} = this.state;   // getting characterID and setting into charID
        if (hasError) { return <SWError/>; }
        return (
        <div className="row d-flex my-sm-3 p-2 justify-content-between no-gutters">
          <ListItem onCharChange={this.onCharChange} />
          <ItemDetails characterID={charID}/>
        </div>
        );
    }
}