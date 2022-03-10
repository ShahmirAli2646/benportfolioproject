import * as React from 'react';
import { Typography } from '@mui/material';

const ServicesList = (props) => {
    var serviceli = props.services;
    var myArray = serviceli.split('__,__');

    const mylist1 = myArray.map((myArray) =>
        <li key={myArray}>
            {myArray}
        </li>
    );
    return (
        <div style={{ marginTop: '100px' }}>
            <Typography style={{ textAlign: 'left' }}>Services</Typography>
            <ul>
                <li style={{ textAlign: 'left' }}>{mylist1}</li>

            </ul>
        </div>
    )
}
export default ServicesList
