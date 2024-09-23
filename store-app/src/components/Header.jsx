import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <Box>
            <AppBar component="nav" position="static" sx={{ backgroundColor: '#01204E' }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight:'bold' }}>
                        E-BookStore
                    </Typography>
                    <Button color="inherit" variant='outlined' sx={{ mx: "10px", textTransform: "capitalize", typography: "subtitle1" }}>Upload</Button>
                    <Button color="inherit" variant='contained' sx={{ textTransform: "capitalize", typography: "subtitle1", backgroundColor:'#FEAE6F' }}>Sign In</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header