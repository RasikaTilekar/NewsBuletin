import React from 'react';
import { Typography, Divider, Box } from '@mui/material';

function StatementOfIndependance() {
    return (
        <div>
            <Box
                className="main"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: '#FBFFDC',
                    marginInline: '20px',
                    marginTop: '10px',
                    padding: '20px'
                }}
            >
                <Typography>
                    <strong>STATEMENT OF INDEPENDANCE</strong>
                </Typography>
                <Divider />
                <Divider />
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    The News Buletin, along with its partners the Enough Project and Not On Our Watch, maintains an absolute commitment to independence, rigorous research and reporting, and impact on behalf of our core mission.
                </Typography>
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    All potential sources and terms of funding undergo a thorough internal review that ensures our commitment to autonomy, as well as compliance with all applicable laws and regulations regarding lobbying, foreign agency, and disclosure.
                </Typography>
            </Box>
        </div>
    )
}

export default StatementOfIndependance