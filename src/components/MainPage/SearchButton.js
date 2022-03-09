import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';

export default function SearchButton() {
  return (
    <Container>
    <Stack style={{display:'block' , margin:'30px' , marginBottom:'50px'}}>
      <Button variant="contained" style={{padding:'10px' , width:'30%' , backgroundColor:'#034371'}}>Search</Button>
    </Stack>
    </Container>
  );
}
