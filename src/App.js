import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './pages/Main';
import Create from './pages/Create';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function App() {
  return (
    <Router >
      <div>
        <nav>
          <AppBar position="static">
            <Toolbar>
              <Link to="/" className='App-link'>
                <Button color="inherit">
                  Main
                </Button>
              </Link>
              <Link to="/create" className='App-link'>
                <Button color="inherit">
                  Create
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </nav>
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
/*
<Link
            to="/"
            className='App-link'
          >
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
            >
              Main
            </Button>
          </Link>
          <Link to="/create" className='App-link'>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
            >Create</Button></Link>
*/