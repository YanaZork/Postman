/*


function App() {
  return (
    <div className="App">
      <h1>Contact Us</h1>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
*/
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import InputMask from 'react-input-mask';



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
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return (
    <div>
      <h1>Create new empl</h1>
      <Formik
        initialValues={{ name: "", email: ""}}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <Field name="tel" type="tel" rattern="[+]7[ ][(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{2}[-][0-9]{2}"/>
          {/*<InputMask mask="+7 (999) 999-99-99"/>*/}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}