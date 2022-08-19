import React from 'react';
import {AppBar, Toolbar, Typography,Box,Stack} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <AppBar position="stick">
        <Toolbar sx={{background:"purple",display:"flex",justifyContent:"space-around",cursor:"pointer"}}>
                <Link to="/" style={{textDecoration:"none"}}>
                     <Typography sx={{color:"white",fontSize:"24px"}}>
                      I Will Watch
                      </Typography>
                </Link>
            <Stack direction="row">
                 <Link to="/watched" style={{textDecoration:"none"}}>
                     <Typography sx={{color:"white",fontSize:"24px"}}>
                      I Watched
                      </Typography>
                </Link>
                <Link to="/add" style={{textDecoration:"none"}}>
                     <AddBoxIcon sx={{marginLeft:"0.5rem",color:"white",fontSize:"36px"}} />
                </Link>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Header