
import './App.css';
import Navbar from './components/navbar'
import Search from './components/MainPage/search'
import SearchButton from './components/MainPage/SearchButton'
import SearchResults from './components/MainPage/SearchResults';
import SearcResults from './components/MainPage/SearchResults'
import ProfilePage from './components/ProfilePage/ProfilePage';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router,Route ,Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path={'/'} component={MainPage}/>
          <Route path={'/profile'} component={ProfilePage}/>

        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
