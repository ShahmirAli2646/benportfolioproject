import * as React from 'react';
import { Typography } from '@mui/material';

const ServicesList = (props) => {
    var serviceli = props.services;
    var myArray = [];
    if(serviceli!==undefined){
        if(serviceli.length!==0){
            myArray = serviceli.split('__,__');
         }
    } 
   
    return (
        <div style={{ marginTop: '100px' }}>
           {myArray.length!==0?(
                <Typography style={{ textAlign: 'left' }}>Services</Typography>
            ):''}
               {myArray.length!==0?(
                   myArray.map((item)=>(
                    <ul>
                        <li>
                            {item}
                        </li>
                    </ul>
                   ))
               ):''} 
        </div>
    )
}
export default ServicesList
