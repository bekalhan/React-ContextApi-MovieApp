import React from 'react';
import {Avatar,Box,Stack,Grid} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { GlobalContext } from '../context/State';

function Watched() {
  const {watched,removeMovieFromWatched,moveToWatchlist} = useContext(GlobalContext);

  return (
    <Box sx={{marginTop:"2rem",marginLeft:"2rem"}}>
    <Grid container>
      <Stack direction="row">
    {watched.map((movie)=>(
              <Grid item lg={6} sx={{marginLeft:"1rem"}}>
                 <Avatar variant="square" sx={{width:"200px",height:"300px"}} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
                 <Box sx={{marginTop:"0.4rem",marginLeft:"4rem",cursor:"pointer"}}>
                      <VisibilityIcon onClick={()=>moveToWatchlist(movie)}  />
                      <CloseIcon sx={{marginLeft:"0.3em"}} onClick={()=>removeMovieFromWatched(movie.id)}  />
                 </Box>
              </Grid>
    ))}
      </Stack>
  </Grid>
  </Box>
  )
}

export default Watched