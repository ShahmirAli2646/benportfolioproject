import * as React from 'react';
import { IconButton } from '@mui/material';
import { TextField } from '@mui/material';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

// render
const CustomSearch = () => {
    return (
        
        <TextField
            style={{float:'left'  , marginTop:'20px' , marginBottom:'20px' , width:"100%"}}
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
        
     
    )
}
export default CustomSearch
