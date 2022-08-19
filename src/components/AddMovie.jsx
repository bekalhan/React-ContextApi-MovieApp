import { Avatar, Box, Typography,Stack,TextField, List, ListItem } from '@mui/material'
import React,{useState} from 'react';
import movie from '../img/movie.jpeg';
import axios from 'axios';
import MovieCart from './MovieCart';

function AddMovie() {
  const [query,setQuery] = useState("");
  const [results,setResults] = useState([]);

   const  handleChange = async (e) =>{
    setQuery(e.target.value);
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`);
    if(!data.errors){
      setResults(data.results);
    }else{
      setResults([]);
    }
  }

  return (
    <Box>
      <Box sx={{display: 'flex',justifyContent: 'center'}}>
        <Box sx={{background:"purple",width:"80%",height:"300px",border:"10px solid gray",display: 'flex',justifyContent: 'center'}}>
            <Stack direction="column" sx={{marginTop:"2em"}}>
                <Typography variant='h3' sx={{color:"white"}}>Welcome the Movies world!</Typography>
                <Typography variant='h4' sx={{color:"white",marginTop:"0.3em"}}>Let's explore some Movies that you will like</Typography>
                <TextField id="outlined-basic" label="Search a Movie" variant="outlined"
                 sx={{background:"white",marginTop:"3rem",borderRadius:"10px",border:"transparent"}}
                 value={query}
                 onChange={handleChange}
                 />
            </Stack>
        </Box>
      </Box>
        <Box>
        {results.map((movie)=>(
            <List>
              <ListItem key={movie.id}>
                  <MovieCart movie={movie} />
              </ListItem>
            </List>
        ))}
        </Box>
    </Box>
  )
}

export default AddMovie