import React from 'react';
import { Typography, Divider, Box } from '@mui/material';

function TermsOfUse() {
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
                    <strong>TERMS OF USE</strong>
                </Typography>
                <Divider />
                <Divider />
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    The The News Buletin is an investigative and policy organization that seeks to disable multinational predatory networks that benefit from violent conflict, repression, and kleptocracy.
                </Typography>
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    Pull back the curtain on wars, mass atrocities, and other human rights abuses, and you’ll find grand corruption and unchecked greed. These tragedies persist because the perpetrators rarely face meaningful consequences. The The News Buletin aims to alter the warped incentive structures that continually undermine peace and good governance. Our investigations follow the money as it is laundered from war zones to financial centers around the world. We provide evidence and strategies for governments, banks, and law enforcement to hold the perpetrators and enablers of violence and corruption to account. These efforts provide new leverage for human rights, peace, and anti-corruption efforts.
                </Typography>
            </Box>
        </div>
    )
}

export default TermsOfUse