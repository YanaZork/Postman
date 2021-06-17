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



export default function App() {
  const history = useHistory();

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
            <Main />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Edit() {
  return (
    <h1>Hi</h1>
  );
}

function Main() {
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return (
    <p>
    hi
    </p>
  );

}



/*


<div>
      {<Link to="/edit"><button onClick={Edit}>Edit</button></Link>}
      <button>Delete</button>
    </div>

class Arr {
  arr(name, email, tel) {
    this.name = name;
    this.email = email;
    this.tel = tel;
  }
}

  var arr = [{
    name:"",
    email: "",
    tel:""
  }]


*/
var arr = [];

function Users() {

  return (
    <div>
      <h1>Create new empl</h1>
      <Formik
        initialValues={{ name: "", email: "", tel: "" }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          //alert(JSON.stringify(values, null, 2));
          arr.push(values);
          console.log(arr);
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="email" />
          <Field name="tel" type="tel" />
          {/*<Field name="tel" > {({ field })} => (<InputMask mask="+7 (999) 999-99-99" {...field} />)</Field>
            pattern="[+]7[ ][(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{2}[-][0-9]{2}"*/}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}