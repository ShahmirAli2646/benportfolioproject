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
import db from '../../firebase/firebase.config';
import {useState,useEffect} from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";


const Related = ()=>{
    const [users,setUsers]=useState([])
    const fetchBlogs=async()=>{
        
        const q = query(collection(db, "users"), where("business", "==", 1));
        const querySnapshot = await getDocs(q);
        console.log('query' , querySnapshot)
        let temp = [];
        querySnapshot.forEach(element => {
            temp.push({id: element.id, data: element.data() })
              
        });
        console.log('temp' , temp)
        setUsers( temp);
        console.log('users' , users)
          
    }
    useEffect(() => {
        fetchBlogs();
        
      },[])
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
        {users?.map((item)=>(
            
            <Card style={{margin:'15px'}} sx={{ minWidth:275 }}>
        <CardContent>
        <Link to={{pathname:'/profile' ,
            state:{ username: item?.data?.fname ,
                 products:item?.data?.productString , 
                  services:item?.data?.serviceString ,
                  address:item?.data?.address,
                  city:item?.data?.city,
                  state:item?.data?.state,
                  photo:item?.data?.photoURL,
                  role:item?.data?.role,
                  fb:item?.data?.fb,
                  insta:item?.data?.insta,
                  linkin:item?.data?.linkin,
                  cardfront:item?.data?.cardFront,
                  cardback:item?.data?.cardBack
                  }}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item?.data?.fname}
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

export default Related