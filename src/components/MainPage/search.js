import * as React from 'react';
import { IconButton } from '@mui/material';
import { TextField } from '@mui/material';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Container } from '@mui/material';

// render
const Search = () => {
    return (
        <Container>
        <TextField
            style={{margin:'50px',  width:'50%'}}
            label="Search"
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
        </Container>
        
     
    )
}
export default Search
