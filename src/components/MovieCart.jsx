import { Avatar, Button, Grid,Stack, Typography } from '@mui/material';
import React from 'react'
import { useContext } from 'react';
import {GlobalContext} from '../context/State';

export const MovieCart = ({movie}) => {
    const {watchlist,addMovieToWatchlist} = useContext(GlobalContext);
    const storedMovie = watchlist.find((f)=>f.id===movie.id);
  return (
    <Stack direction="column" flex={4} sx={{marginTop:"30px",marginLeft:"300px"}}>
        <Grid container>
            <Grid item lg={8} md={8}>
                <Stack direction="row">
                  <Avatar variant="square" sx={{width:"300px",height:"400px"}} src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
                    <Stack direction="column">
                        <Typography variant="h4" sx={{marginLeft:"30px"}}>{movie.title}</Typography>
                        <Typography sx={{fontWeight:"100",marginLeft:"30px",marginTop:"5px"}}>{movie.release_date}</Typography>
                        <Stack direction="row">
                        <Typography sx={{fontWeight:"100",marginLeft:"30px",marginTop:"5px"}}>
                            IMDB : 
                        </Typography>
                        <Typography sx={{marginTop:"5px",marginLeft:"5px"}}>
                                {movie.vote_average}
                        </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" sx={{marginLeft:"auto"}}>
                            <Button
                             disabled={storedMovie}
                             variant="container"
                             sx={{background:"yellow"}}
                             onClick={()=>addMovieToWatchlist(movie)}>
                                ADD TO WATCHLIST
                            </Button>
                            <Button variant="container" sx={{background:"yellow",marginLeft:"20px"}}>
                                ADD TO WATCHED
                            </Button>
                        </Stack>
                </Stack>
            </Grid>
        </Grid>
    </Stack>
  )
}

export default MovieCart;
