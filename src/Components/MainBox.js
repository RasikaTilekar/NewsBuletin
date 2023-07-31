import React from 'react';
import { Box } from '@mui/material';

function MainBox({ children }) {
    return (
        <Box
            className="main"
            sx={{
                display: "flex",
                flexDirection: "row",
                bgcolor: '#FBFFDC',
                marginInline: '20px',
                marginTop: '10px',

            }}
        >{children}</Box>
    )
}

export default MainBox