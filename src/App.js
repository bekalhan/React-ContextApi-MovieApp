import {Box} from '@mui/material';
import Header from './components/Header'; 
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import MovieList from './components/MovieList';
import Watched from './components/Watched';
import AddMovie from './components/AddMovie';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/watched" element={<Watched />}  />
        <Route path="/add" element={<AddMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
