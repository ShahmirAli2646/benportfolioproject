import * as React from 'react';
import { Typography } from '@mui/material';

const ServicesList = (props) => {
    return (
        <div style={{marginTop:'100px'}}>
            <Typography style={{textAlign:'left'}}>Services</Typography>
            <ul>
                <li style={{textAlign:'left'}}>{props.services}</li>
                
            </ul>
        </div>
    )
}
export default ServicesList
