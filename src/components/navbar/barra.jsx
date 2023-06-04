import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Movie from '@mui/icons-material/Movie';
import {Link, useNavigate} from 'react-router-dom';

const Barra = () => {

  const navigate = useNavigate();

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Movie />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/home">PeliFlins app</Link>
          </Typography>

          
          <Button variant="contained" onClick={() => {navigate("/peliculas")}}>Películas</Button>

          
        </Toolbar>
      </AppBar>
    </Box>
        </>
    );
}

export default Barra;