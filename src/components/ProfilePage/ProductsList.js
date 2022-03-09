import * as React from 'react';
import { Typography } from '@mui/material';

const ProductsList = (props) => {
    return (
        <div style={{ marginTop: '100px' }}>
            <Typography style={{ textAlign: 'left' }}>Products</Typography>
            <ul>
                    <li style={{ textAlign: 'left' }}>{props.products}</li>
            </ul>
        </div>
    )
}
export default ProductsList
