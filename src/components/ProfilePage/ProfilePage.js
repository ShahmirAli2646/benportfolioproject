import * as React from 'react';
import CustomSearch from './CustomSearch';
import BuisnessCard from './BuisnessCard';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import AvatarandDetails from './AvatarandDetails';
import ProductsList from './ProductsList';
import ServicesList from './ServicesList';
import Related from './Related';
import { useLocation } from 'react-router-dom'
import DeepLink from './DeepLink';
import { IconButton } from '@mui/material';
import { TextField } from '@mui/material';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import db from '../../firebase/firebase.config';
import { collection, query, where, getDocs } from "firebase/firestore";


const ProfilePage = () => {
    const location = useLocation()
    const { username,
        products,
        services,
        address,
        city,
        state,
        photo,
        role,
        fb,
        insta,
        linkin,
        cardfront,
        cardback,
        qr,
        url,
        twitter,
        youtube,
        whatsapp,
        mail,
        dynamicLink, } = location.state
    const [text, setQuery] = React.useState()
    const [searchresult, setSearchResults] = React.useState([])

    const fetchBlogs = async () => {

        const q = query(collection(db, "users"), where("tag", "array-contains", text));
        const querySnapshot = await getDocs(q);
        console.log('query', querySnapshot)
        let temp = [];
        querySnapshot.forEach(element => {
            temp.push({ id: element.id, data: element.data() })

        });
        console.log('temp', temp)
        setSearchResults(temp);


    }
    const handleClick = () => {
        fetchBlogs()
    }
    React.useEffect(() => {

    }, [])
    return (
        <Container maxWidth='lg' >
            <CssBaseline />
            <Grid container spacing={1}>
                <Grid item xl={6} lg={6} md={8}  >
                    <TextField
                        value={text}
                        onChange={(event) => {
                            setQuery(event.target.value)
                        }}
                        style={{ float: 'left', marginTop: '20px', marginBottom: '20px', width: "100%" }}
                        label="Search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton onClick={handleClick}>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <BuisnessCard
                        cardback={cardback}
                        cardfront={cardfront}
                        fb={fb}
                        insta={insta}
                        linkin={linkin}
                        username={username}
                        photo={photo}
                        qr={qr}
                        twitter={twitter}
                        youtube={youtube}
                        whatsapp={whatsapp}
                        mail={mail}
                        url={url}
                    />
                    <AvatarandDetails
                        photo={photo}
                        username={username}
                        role={role}
                        address={address}
                        city={city}
                        state={state} />
                    <ProductsList products={products} />
                    <ServicesList services={services} />
                    <DeepLink qr={qr} url={dynamicLink} />
                </Grid>
                <Grid item xl={6} lg={6} md={8}>
                    <Related searchresult={searchresult} />
                </Grid>


            </Grid>
        </Container>
    )
}
export default ProfilePage
