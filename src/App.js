import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { countriesList as CountriesList } from './components/CountriesList';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/countries/" component={CountriesList} />
        {/* <Route exact path='/countries/:id' component={CountryDetail}/> */}
      </Switch>
      {/* <CountriesList/> */}
    </div>
  );
}

export default App;
