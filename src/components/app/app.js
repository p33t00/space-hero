import React from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import { SwapiServiceProvider } from '../../swapi-service-provider';
import SwapiService from '../../SwapiService';

export default class App extends React.Component {
  swapi = new SwapiService();

  componentDidCatch() {
    console.error('something is wrong here');
    // put some disent error display here
  }

  render() {
    return (
      <SwapiServiceProvider value={this.swapi}>
        <div className="app col no-gutters">
          <div className="row">
          <Header/>
          </div>
          <section className="my-3">
            <RandomPlanet/>
          </section>
          <PeoplePage/>
        </div>
      </SwapiServiceProvider>
    );
  }
}