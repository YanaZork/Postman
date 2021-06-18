import { useState, useEffect } from 'react';

export default function Main() {
    /*
    var result = () => {
        for(var i=0; i<setValues.length; i++){
            <div>
                <span>{values[i].name}</span>
            </div>
        }
    };
    */


    const [values, setValues] = useState([]);

    function Donload() {
        fetch('http://localhost:8000/emp/').then(response => response.json()).then((value)=> setValues(value));
    }

    useEffect(() => {
        Donload();
      }, []);

      function DeleteItem(id) {
        let options =
                        {
                            method: 'DELETE'
                        }
                    fetch('http://localhost:8000/emp/delete/'+id, options).then( (respons) => {
                        Donload();
                    });
      }

    
    const getValues = (values.length)? values.map ((value, index) => (
        <div key={value._id}>
            Имя: <span> {value.empName} </span>
            Почта: <span>{value.empEmail} </span>
            Телефон: <span>{value.empMobile} </span>
            <button onClick={DeleteItem.bind(this, value._id)}>Delete</button>
        </div>
    )): <div>Нет данных</div>

    return (<div>{getValues}</div>);
  
}
