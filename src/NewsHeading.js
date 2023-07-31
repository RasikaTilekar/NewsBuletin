import React, { useContext, useState } from 'react';
import { Box, Grid, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { UserInfo } from './App';

const headingStyle = {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
    position: 'sticky',
    marginInline: '20px',
    marginTop: '10px',
    top: '60px',
    backgroundColor: 'white',
    color: "#245564",
    borderBottom: 1,
    borderBottomColor: "#245564",
    zIndex: 1,
    ":first-of-type": { zIndex: 2 }
}


const NewsHeading = ({ title, showAllData }) => {

    const [seeAllButton, setseeAllButton] = useState(true);
    const { isAuthenticatedUser } = useContext(UserInfo)

    const seeAllHandller = (e) => {
        if (!seeAllButton) {
            setseeAllButton(true);
        } else {
            setseeAllButton(false)
        }

        showAllData(seeAllButton);
    }

    return (
        <Grid sx={headingStyle}>
            <Box sx={{ m: 1, textAlign: 'start', fontSize: 25, marginInline: '20px' }}>
                <strong>{title}</strong>
            </Box>
            {isAuthenticatedUser && <Button style={{ alignSelf: 'center' }} onClick={seeAllHandller}>{seeAllButton ? 'See All' : 'See Less'} <ArrowForwardIosIcon /></Button>}
        </Grid>
    )
}

export default NewsHeading