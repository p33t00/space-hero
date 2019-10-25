import React from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
// import SwapiService from '../../SwapiService';

export default class App extends React.Component {
  render() {
    return (
      <div className="app col no-gutters">
        <div className="row">
        <Header/>
        </div>
        <div className="row my-3">
        <RandomPlanet/>
        </div>
        <PeoplePage/>
      </div>
    );
  }
}