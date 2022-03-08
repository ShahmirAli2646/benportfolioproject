import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import src from '../../assets/test.jpg'
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AvatarandDetails = ()=>{
    return(
      <div style={{marginTop:'120px'}}>
<Avatar style={{display:'inline-block', float:'left' , marginRight:'10px' , width:100 , height:100}} alt="Remy Sharp" src={src} />
<Card style={{marginBottom:'20px' , maxWidth:"100%"}}>
    <CardHeader title="Bento Joseph"/>
    <CardContent>
        <Typography>Web Designer</Typography>
        <Stack style={{flexWrap:'wrap' , justifyContent:'center' , marginTop:'15px'}}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item>Saikapara</Item>
        <Item>Mangaladia</Item>
        <Item>Assam</Item>
        <Item>India</Item>
        
      </Stack>
    </CardContent>
</Card>
      </div>
    )
}
export default AvatarandDetails