
import './App.css';
import Navbar from './components/navbar'
import Search from './components/search'
import SearchButton from './components/SearchButton'
import SearchResults from './components/SearchResults';
import SearcResults from './components/SearchResults'
import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProfilePage/>
     
    </div>
  );
}

export default App;
