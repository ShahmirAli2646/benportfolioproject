import * as React from 'react';
import { Typography } from '@mui/material';

const ServicesList = () => {
    return (
        <div style={{marginTop:'100px'}}>
            <Typography style={{textAlign:'left'}}>Services</Typography>
            <ul>
                <li style={{textAlign:'left'}}>Editing Software</li>
                <li style={{textAlign:'left'}}>Mixing Software</li>
                <li style={{textAlign:'left'}}>Editing Software</li>
            </ul>
        </div>
    )
}
export default ServicesList
