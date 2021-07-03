import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { countriesList as CountriesList } from './components/CountriesList';
import { countryDetails as CountryDetails } from './components/CountryDetails';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div class="container">
        <div class="row">
        {/* <div className="flexin"> */}
          <CountriesList />
          
            <Switch>
              <Route exact path="/countries/:id" component={CountryDetails} />
              {/* <Route exact path='/countries/:id' component={CountryDetail}/> */}
            </Switch>
          {/* </div> */}
        </div>
      </div>
      {/* <CountriesList/> */}
    </div>
  );
}

export default App;
