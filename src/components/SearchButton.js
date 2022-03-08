import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function SearchButton() {
  return (
    <Stack style={{display:'block' , margin:'30px' , marginBottom:'50px'}}>
      <Button variant="contained" style={{padding:'10px' , width:'10%'}}>Search</Button>
    </Stack>
  );
}
