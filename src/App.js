import React from 'react';
import Main from './components/layout/Main';
import TrackDetails from './components/tracks/TrackDetails';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TrackContextProvider from '../src/contexts/TrackContext';

function App() {
  return (
    <TrackContextProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/trackdetails/:id" component={TrackDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    </TrackContextProvider>
  );
}

export default App;
