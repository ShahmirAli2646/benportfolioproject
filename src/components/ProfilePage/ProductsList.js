import * as React from 'react';
import { Typography } from '@mui/material';

const ProductsList = (props) => {
    var productsli = props.products;
    var myArray = [];
    if(productsli!==undefined){
        if(productsli.length!==0){
            myArray = productsli.split('__,__');
        }
    }

           
        
    
    return (
        <div style={{ marginTop: '100px' }}>
            {myArray.length!==0?(
                <Typography style={{ textAlign: 'left' }}>Products</Typography>
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
export default ProductsList
