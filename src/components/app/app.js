import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import PlanetsPage from '../planets-page';
import StarshipsPage from '../starships-page';
import {StarshipDetails} from '../page-components';
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
        <Router>
          <div className="app col no-gutters">
            <div className="row">
            <Header/>
            </div>
            <section className="my-3">
              <RandomPlanet/>
            </section>

            <Route path='/' exact render={() => <h2>Welcome to SW</h2>} />
            <Route path='/people/:id?' component={PeoplePage} />
            <Route path='/planets' component={PlanetsPage} />
            <Route path='/starships' exact component={StarshipsPage} />
            <Route path='/starships/:id' render = {(props) => {return <StarshipDetails itemID={props.match.params.id} />}} />

          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}