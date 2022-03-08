import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Related = ()=>{
    const result = [
        {
            title:'buisness Card',
          
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
          
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
          
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
        },
        {
            title:'buisness Card',
        },
    ]
    return(
    <React.Fragment>
      
      <Container maxWidth="md">
        
        <Typography style={{marginTop:'10px',textAlign:'left'}}>Related</Typography>
        <Stack style={{flexWrap:'wrap' }} direction="row" >
        {result.map((item)=>(
            
            <Card style={{margin:'15px'}} sx={{ minWidth:275 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.title}
        </Typography>
       
      </CardContent>
      
    </Card>
        ))}
        </Stack>
        
      </Container>
    </React.Fragment>
    )
}

export default Related