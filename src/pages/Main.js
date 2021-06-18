import { useState, useEffect } from 'react';
import EditItem from './EditItem';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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
        <div key={value._id} >
        <Card variant="outlined">
        <CardContent><ListItem>
            <Avatar src="/broken-image.jpg"></Avatar>
            
                <ListItemText primary={value.empName} />
            </ListItem><Divider />
            <ListItem>
                <ListItemText primary={value.empEmail} />
            </ListItem><Divider />
            <ListItem>
                <ListItemText primary={value.empMobile} />
            </ListItem>
            
            
            <Button
                onClick={
                    EditItem.bind(this, value)}
                variant="outlined"
                size="small"
                color="primary"
            >
                Edit
            </Button>

            <Button
                onClick={
                    DeleteItem.bind(this, value._id)}
                variant="outlined"
                size="small"
                color="primary"
            >
                Delete
            </Button>
            </CardContent></Card>
            <br /><br />
        </div>
    )) : <div>Нет данных</div>

    return (<div>{getValues}</div>);

}

/*
Имя: <span> {value.empName} </span><br />
            Почта: <span>{value.empEmail} </span><br />
            Телефон: <span>{value.empMobile} </span><br />

*/
