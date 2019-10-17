import React from 'react';
import './app.css';
import Header from '../header';
import ItemDetails from '../item-details';
import ListItem from '../list-item';
import RandomPlanet from '../random-planet';
// import SwapiService from '../../SwapiService';

export default class App extends React.Component {
  
  render() {
    // const swap = new SwapiService();
    // try{
    //   swap.getAllStarships().then(resp => console.log(resp));
    // } catch(e){
    //   console.error(e);
    // }
    return (
      <div className="app col no-gutters">
        <div className="row">
        <Header/>
        </div>
        <div className="row my-3">
        <RandomPlanet/>
        </div>
        <div className="row d-flex my-sm-3 p-2 justify-content-between">
          <ItemDetails/>
          <ListItem/>
        </div>
      </div>
    );
  }
}

// function App() {
//   const swap = new SwapiService();
//   // try{
//     // swap.getRequest('https://swapi.co/api/people/1').catch(e => console.log(e));
//     console.log(swap.getPeople(1));
//     // swap.getPeople(1);
//   // } catch(e){
//     // console.error(e);
//   // }
//   return (
//     <div className="app">
//       <header className="app-header">
//       <p>hello there </p>
//       {/* <p>{}</p> */}
//       </header>
//     </div>
//   );
// }

// export default App;
