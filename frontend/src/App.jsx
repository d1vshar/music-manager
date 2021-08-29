import React from 'react';
import './playerbar.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MusicPlayerBar from './components/MusicPlayerBar';
import NavBar from './components/nav/NavBar';
import Home from './pages/home/Home';
import ManageGenre from './pages/manage/genre/ManageGenre';

const App = () => (
  <>
    <Router>
      <NavBar />
      <div className="container mx-auto p-4">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/manage/songs">
            Manage Songs
          </Route>
          <Route exact path="/manage/playlists">
            Manage Playlists
          </Route>
          <Route exact path="/manage/artists">
            Manage Artists
          </Route>
          <Route exact path="/manage/genres">
            <ManageGenre />
          </Route>
        </Switch>
      </div>
    </Router>
    <MusicPlayerBar />
  </>

);

export default App;
