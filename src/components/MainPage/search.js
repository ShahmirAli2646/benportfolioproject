import * as React from 'react';
import { IconButton } from '@mui/material';
import { TextField } from '@mui/material';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import SearchResults from './SearchResults';
import Stack from '@mui/material/Stack';
import db from '../../firebase/firebase.config';
import { collection, query, where, getDocs } from "firebase/firestore";

// render
const Search = () => {
    const [text, setQuery] = React.useState()
    const [searchresult, setSearchResults] = React.useState([])
    
    const fetchBlogs = async () => {

        const q = query(collection(db, "users"), where("tag","array-contains", text));
        const querySnapshot = await getDocs(q);
        console.log('query', querySnapshot)
        let temp = [];
        querySnapshot.forEach(element => {
            temp.push({ id: element.id, data: element.data() })

        });
        console.log('temp', temp)
        setSearchResults(temp);
        

    }
    const handleClick = ()=>{
        fetchBlogs()
    }
    return (
        <Container>
        <TextField
            value={text}
            onChange={(event)=>{
              setQuery(event.target.value)
            }}
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
        <Stack style={{ display: 'block', margin: '30px', marginBottom: '50px' }}>
        <Button onClick={handleClick} variant="contained" style={{ padding: '10px', width: '18%', backgroundColor: '#034371' }}>Search</Button>
        </Stack>
        <SearchResults searchresult={searchresult}/>
        </Container>
        
     
    )
}
export default Search
