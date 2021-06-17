import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import {useHistory} from "react-router-dom";
export default function Create() {
let history = useHistory();
    return (
        <div>
            <h1>Create new empl</h1>
            <Formik
                initialValues={{ empName: "", empEmail: "", empMobile: "" }}
                onSubmit={async values => {
                    //await new Promise(resolve => setTimeout(resolve, 500));
                    //alert(JSON.stringify(values, null, 2));
                    let options =
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json;charset=utf-8'
                            },
                            body: JSON.stringify(values)
                        }
                    fetch('http://localhost:8000/emp/create', options).then( (respons) => {
                        history.push("/");
                    });
          }}
        >
            <Form>
                <Field name="empName" type="text" />
                <Field name="empEmail" type="email" />
                <Field name="empMobile" type="tel" />
                {/*<Field name="tel" > {({ field })} => (<InputMask mask="+7 (999) 999-99-99" {...field} />)</Field>
              pattern="[+]7[ ][(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{2}[-][0-9]{2}"*/}
                <button type="submit">Submit</button>
            </Form>
        </Formik>
      </div>
    );
}