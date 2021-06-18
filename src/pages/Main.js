import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import Create from './Create';
import EditItem from './EditItem';

export default function Main() {
    const [values, setValues] = useState([]);

    function Donload() {
        fetch('http://localhost:8000/emp/').then(response => response.json()).then((value) => setValues(value));
    }

    useEffect(() => {
        Donload();
    }, []);

    function DeleteItem(id) {
        let options =
        {
            method: 'DELETE'
        }
        fetch('http://localhost:8000/emp/delete/' + id, options).then((respons) => {
            Donload();
        });
    }
    /*
    let history = useHistory();
    function Edit(item) {
        
        console.log(item);
        history.push({
            pathname: "/edit/" + item._id,
            state: {
                item: item
            }
        })

        let options =
        {
            method: 'PATCH'
        }
        fetch('http://localhost:8000/emp/' + item._id, options).then((respons) => {
            
            Donload();
        });
    }
    */

    const getValues = (values.length) ? values.map((value, index) => (
        <div key={value._id}>
            {index + 1}.
            Имя: <span> {value.empName} </span>
            Почта: <span>{value.empEmail} </span>
            Телефон: <span>{value.empMobile} </span>

            <button onClick={EditItem.bind(this, value)}>Edit</button>
            <button onClick={DeleteItem.bind(this, value._id)}>Delete</button>
        </div>
    )) : <div>Нет данных</div>

    return (<div>{getValues}</div>);

}
