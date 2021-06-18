import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import InputMask from 'react-input-mask';
import { render } from '@testing-library/react';
import Main from './pages/Main';
import Create from './pages/Create';
import EditItem from './pages/EditItem';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/edit">
            <EditItem />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}