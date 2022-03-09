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
    React.useEffect(() => {

    }, [])
    return (
        <Container maxWidth='xl' >
            <CssBaseline />
            <Grid container spacing={1}>
                <Grid item xl={6} lg={6} md={6}  >
                    <CustomSearch />
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
                    <DeepLink qr={qr} url={dynamicLink}/>
                </Grid>
                <Grid item xl={6} lg={6} md={6}>
                    <Related />
                </Grid>


            </Grid>
        </Container>
    )
}
export default ProfilePage
