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
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { CardMedia } from '@mui/material';


const Related = (props) => {
    const [users, setUsers] = useState([])
    const fetchBlogs = async () => {

        const q = query(collection(db, "users"), where("business", "==", 1));
        const querySnapshot = await getDocs(q);
        console.log('query', querySnapshot)
        let temp = [];
        querySnapshot.forEach(element => {
            temp.push({ id: element.id, data: element.data() })

        });
        console.log('temp', temp)
        setUsers(temp);
        console.log('users', users)

    }
    useEffect(() => {
        fetchBlogs();

    }, [])

    return (
        <React.Fragment>

            
                {props.searchresult.length!==0?(
                    <Typography style={{ marginTop: '10px', textAlign: 'left' }}>Search Results</Typography>
                ):<Typography style={{ marginTop: '10px', textAlign: 'left' }}>Related</Typography>}
                <Stack style={{ flexWrap: 'wrap' }} direction="row" >
                    {props.searchresult.length !== 0 ? (
                        <React.Fragment>
                            {props.searchresult.map((item) => (

                                <Card style={{margin:'3px'}} sx={{ minWidth: 250 }}>
                                    <CardContent style={{ padding: 0 }}>
                                        <Link to={{
                                            pathname: '/profile',
                                            state: {
                                                username: item?.data?.fname,
                                                products: item?.data?.productString,
                                                services: item?.data?.serviceString,
                                                address: item?.data?.address,
                                                city: item?.data?.city,
                                                state: item?.data?.state,
                                                photo: item?.data?.photoURL,
                                                role: item?.data?.role,
                                                fb: item?.data?.fb,
                                                insta: item?.data?.insta,
                                                linkin: item?.data?.linkin,
                                                cardfront: item?.data?.cardFront,
                                                cardback: item?.data?.cardBack,
                                                qr: item?.data?.qrCodeImage,
                                                url: item?.data?.web,
                                                twitter: item?.data?.twitr,
                                                youtube: item?.data?.yt,
                                                whatsapp: item?.data?.whatsapp,
                                                mail: item?.data?.mail,
                                                dynamicLink: item?.data?.dynamicLink,
                                            }
                                        }}>
                                            <CardMedia component="img"

                                                image={item?.data.cardFront}
                                                sx={{
                                                    width: '100%', height: '130px',
                                                    backgroundSize: '',
                                                    backgroundRepeat: 'no-repeat',
                                                }}
                                            />
                                        </Link>

                                    </CardContent>

                                </Card>
                            ))}
                        </React.Fragment>
                    ) : <React.Fragment>
                        {users?.map((item) => (

                            <Card style={{margin:'3px'}} sx={{ minWidth: 250 }}>
                                <CardContent style={{ padding: 0 }}>
                                    <Link to={{
                                        pathname: '/profile',
                                        state: {
                                            username: item?.data?.fname,
                                            products: item?.data?.productString,
                                            services: item?.data?.serviceString,
                                            address: item?.data?.address,
                                            city: item?.data?.city,
                                            state: item?.data?.state,
                                            photo: item?.data?.photoURL,
                                            role: item?.data?.role,
                                            fb: item?.data?.fb,
                                            insta: item?.data?.insta,
                                            linkin: item?.data?.linkin,
                                            cardfront: item?.data?.cardFront,
                                            cardback: item?.data?.cardBack,
                                            qr: item?.data?.qrCodeImage,
                                            url: item?.data?.web,
                                            twitter: item?.data?.twitr,
                                            youtube: item?.data?.yt,
                                            whatsapp: item?.data?.whatsapp,
                                            mail: item?.data?.mail,
                                            dynamicLink: item?.data?.dynamicLink,
                                        }
                                    }}>
                                        <CardMedia component="img"

                                            image={item?.data.cardFront}
                                            sx={{
                                                width: '100%', height: '130px',
                                                backgroundSize: '',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        />
                                    </Link>

                                </CardContent>

                            </Card>
                        ))}
                    </React.Fragment>}

                </Stack>

           
        </React.Fragment>
    )
}

export default Related