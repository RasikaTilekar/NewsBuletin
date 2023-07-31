import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Header = () => {
    return (
        <Grid className="header">
            <Typography component="div">
                <Box sx={{ letterSpacing: 6, m: 1, textAlign: 'center' }}>
                    Welcome to Buletin
                </Box>
                <Box sx={{ m: 1, textAlign: 'center', fontSize: 25 }}>
                    <strong>Craft narratives ✍ that ignite inspiration 💡,</strong>
                </Box>
                <Box sx={{ m: 1, textAlign: 'center', fontSize: 25 }}>
                    <strong>knowledge 📚 and entertainment🎥.</strong>
                </Box>
            </Typography>
        </Grid>
    )
}

export default Header