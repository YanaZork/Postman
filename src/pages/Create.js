import { Formik, Form, Field } from 'formik';
import React from 'react';
import { useHistory } from "react-router-dom";
import InputMask from 'react-input-mask';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';




export default function Create() {

    let history = useHistory();
    return (
        <div>
            <h1>Create new empl</h1>
            <Formik
                initialValues={{ empName: "", empEmail: "", empMobile: "" }}
                onSubmit={async values => {
                    let options =
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(values)
                    }
                    fetch('http://localhost:8000/emp/create', options).then((respons) => {
                        history.push("/");
                    });
                }}
            >
                <Form>
                
                    <Field name="empName" type="text" placeholder="Имя" /><br />
                    <Field name="empEmail" type="email" placeholder="Почта" /><br />
                    <Field name="empMobile" render={({ field }) => { return <InputMask mask="+7(999)999-99-99" placeholder="Телефон" {...field} /> }} /><br />
                    <Button type="submit"
                        variant="contained"
                        color="primary"
                        startIcon={<SaveIcon />}
                    >
                        Submit
                    </Button>
                </Form>
            </Formik>

        </div>
    );
}