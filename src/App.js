import React from 'react';
import Main from './components/layout/Main';
import TrackDetails from './components/tracks/TrackDetails';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/trackdetails/:id" component={TrackDetails} />
      </Switch>
    </div>
  );
}

export default App;
