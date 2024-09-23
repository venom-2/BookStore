import { Box, Grid2, Typography, Button } from '@mui/material'
import React from 'react'
import Image from '../assets/211.gif'

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#01204E', height: '200px', mt: 2, px: 3, py: 4 }}>
            <Grid2 container spacing={2}>
                <Grid2 size={6}>
                    <Box>
                        <Typography variant='h4' sx={{ color: "#ffffff", fontWeight: 'bold' }} gutterBottom>
                            E-BookStore
                        </Typography>
                        <Typography variant='body1' sx={{ color: "#ffffff" }} gutterBottom>
                            Your one-stop destination for all engineering books. From core textbooks to advanced references, we provide everything you need to excel in your studies.
                        </Typography>
                        <Button variant='contained' color='inherit' sx={{ marginTop: '20px', backgroundColor: '#FEAE6F' }}>Support Us</Button>
                    </Box>
                </Grid2>
                <Grid2 size={3}>

                </Grid2>
                <Grid2 size={3}>
                    <Box
                        component='img'
                        src={Image}
                        sx={{width:'350px'}}
                    >
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Footer