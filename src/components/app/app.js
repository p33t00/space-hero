import React from 'react';
import './app.css';
import Header from '../header';
import ItemDetails from '../item-details';
import ListItem from '../list-item';
import RandomPlanet from '../random-planet';
// import SwapiService from '../../SwapiService';

export default class App extends React.Component {
  state = {
    characterID: null
  }

  onCharChange = (id) => {
    this.setState({characterID: id});
  }

  render() {
    const {characterID: charID} = this.state;   // getting characterID and setting into charID
    return (
      <div className="app col no-gutters">
        <div className="row">
        <Header/>
        </div>
        <div className="row my-3">
        <RandomPlanet/>
        </div>
        <div className="row d-flex my-sm-3 p-2 justify-content-between">
          <ItemDetails characterID={charID}/>
          <ListItem onCharChange={this.onCharChange} />
        </div>
      </div>
    );
  }
}