import * as React from 'react';
import Search from './search';
import SearchButton from './SearchButton';
import SearchResults from './SearchResults';

const MainPage = ()=>{
    return(
        <div>
            <Search/>
            <SearchButton/>
            <SearchResults/>
        </div>

    )
}

export default MainPage