import * as React from 'react';
import { Typography } from '@mui/material';

const ProductsList = (props) => {
    var productsli = props.products;
    var myArray = productsli.split('__,__');

    const mylist = myArray.map((myArray) =>
        <li key={myArray}>
            {myArray}
        </li>
    );
    return (
        <div style={{ marginTop: '100px' }}>
            <Typography style={{ textAlign: 'left' }}>Products</Typography>
            <ul>
                <li style={{ textAlign: 'left' }}>
                    {mylist}
                </li>
            </ul>
        </div>
    )
}
export default ProductsList
