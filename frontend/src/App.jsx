import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MusicPlayerBar from './components/MusicPlayerBar';
import NavBar from './components/NavBar';
import Library from './pages/library/Library';

const App = () => (
  <Router>
    <NavBar />
    <div className="container mx-auto p-4">
      <Switch>
        <Route exact path="/">
          Playlists
        </Route>
        <Route exact path="/library">
          <Library />
        </Route>
        <Route path="/manage/songs">
          Manage Songs
        </Route>
        <Route path="/manage/playlists">
          Manage Playlists
        </Route>
        <Route path="/manage/artists">
          Manage Artists
        </Route>
        <Route path="/manage/genres">
          Manage Genres
        </Route>
      </Switch>
    </div>
    <MusicPlayerBar />
  </Router>
);

export default App;
