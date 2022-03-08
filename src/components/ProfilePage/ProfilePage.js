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

const ProfilePage = () => {
    return (
        <Container maxWidth='xl' >
            <CssBaseline/>
          <Grid container spacing={1}>
           <Grid item xl={6} lg={6} md={6}  >
           <CustomSearch/>
           
           <BuisnessCard/>
           <AvatarandDetails/>
           <ProductsList/>
           <ServicesList/>
               </Grid>   
               <Grid item xl={6} lg={6} md={6}>
              <Related/>
          </Grid>
          
          
          </Grid>  
          </Container>
    )
}
export default ProfilePage
