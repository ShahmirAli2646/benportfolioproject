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
import { Link } from 'react-router-dom';

const SearchResults = ()=>{
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
      <CssBaseline />
      <Container maxWidth="lg">
        
        <Typography style={{textAlign:'left'}}>Top Searches</Typography>
        <Stack style={{flexWrap:'wrap'}} direction="row" >
        {result.map((item)=>(
            
            <Card style={{margin:'6px'}} sx={{ minWidth: 275 }}>
        <CardContent>
            <Link to={'/profile'}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            
          {item.title}
        </Typography>
        </Link>
       
      </CardContent>
      
    </Card>
        ))}
        </Stack>
        
      </Container>
    </React.Fragment>
    )
}

export default SearchResults