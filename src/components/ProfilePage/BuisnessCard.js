import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import src from '../../assets/test.jpg'


const BuisnessCard = (props) => {
    return (
           <div style={{marginTop:'130px'}}>
               <Typography style={{textAlign:'left' , marginBottom:'20px'}}>{props.username}</Typography>
           <Card sx={{ minWidth: 475 , marginBottom:'20px'}}>
               <CardHeader></CardHeader>
               <CardContent>
               <Avatar style={{float:'right' , position:'relative' , top:'-27px'}} alt="Remy Sharp" src={props.photo} />
                   <Typography>Buisness Card</Typography>
               </CardContent>
               <CardActions style={{justifyContent:'center'}}>
                   <Button variant="outlined" href={props.fb}>Facebook</Button>
                   <Button variant="outlined" href={props.insta}>Instagram</Button>
                   <Button variant="outlined" href={props.linkin}>LinkedIn</Button>
                   </CardActions>
           </Card>
           </div>
        
    )
}
export default BuisnessCard
