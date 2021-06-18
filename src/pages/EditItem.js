import { Formik, Form, Field } from 'formik';
import React from 'react';
import { useHistory } from "react-router-dom";
import InputMask from 'react-input-mask';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';




export default function EditItem(values) {
    let history = useHistory();
    console.log(values);
    history.push({
      pathname: "/edit/" + values._id,
      state: {
        values: values
      }
    })
    return (
      <div>
        <Formik
          initialValues={{ empName: values.empName, empEmail: values.empEmail, empMobile: values.empMobile }}
          onSubmit={async values => {
            let options =
            {
              method: 'PATCH'
            }
            fetch('http://localhost:8000/emp/' + values._id, options).then((respons) => {
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