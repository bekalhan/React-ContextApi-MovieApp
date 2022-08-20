import React from 'react';
import {Box, Typography,Grid,Stack,Avatar} from '@mui/material';
import { useContext } from 'react';
import { GlobalContext } from '../context/State';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';

function MovieList() {
  const {watchlist,removeMovieFromWatchlist,addMovieToWatched} = useContext(GlobalContext);
  return (
    <Box sx={{marginTop:"2rem",marginLeft:"2rem"}}>
      <Grid container>
        <Stack direction="row">
      {watchlist.map((movie)=>(
                <Grid item lg={6} sx={{marginLeft:"1rem"}}>
                   <Avatar variant="square" sx={{width:"200px",height:"300px"}} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
                   <Box sx={{marginTop:"0.4rem",marginLeft:"4rem",cursor:"pointer"}}>
                        <VisibilityIcon onClick={()=>addMovieToWatched(movie)} />
                        <CloseIcon sx={{marginLeft:"0.3em"}} onClick={()=>removeMovieFromWatchlist(movie.id)} />
                   </Box>
                </Grid>
      ))}
        </Stack>
    </Grid>
    </Box>
  )
}

export default MovieList