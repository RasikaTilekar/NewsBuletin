import React from 'react';
import { Typography, Divider, Box, List, ListItem } from '@mui/material';


function AboutTNB() {
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
                <Typography variant='h6'>
                    <strong>ABOUT THE NEWS BULETIN</strong>
                </Typography>
                <Divider />
                <Divider />
                <Typography variant='subtitle1'>
                    <strong>Our mission</strong>
                </Typography>
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    <strong>The News Buletin (TNB) makes media connecting you to the movements, people, and perspectives that are advancing the cause of a more just, equal, and livable planet.</strong> We broaden your understanding of the issues, contexts, and voices behind the news headlines.

                    We are rigorous in our journalism and dedicated to the facts, but unafraid to engage alongside movements for change, because we believe journalism and media making has a critical role to play in illuminating pathways for collective action.

                    That’s why we make media engaging people not as a passive audience of consumers and spectators, but as active—or soon-to-be activated—participants in the struggle for a better world. Our platform highlights the voices and ideas not just of academics and pundits, but grassroots participants in social movements for change: the people on the frontlines of fights against injustice.
                </Typography>

                <Typography variant='subtitle1'>
                    <strong>What we believe</strong>
                </Typography>
                <Typography style={{ marginTop: "15px", marginBottom: '15px' }}>
                    We ground our reporting in basic facts about the world we live in:
                    <List
                        sx={{ width: '100%' }}

                    >
                        <ListItem>

                            - that the failure of capitalism to deliver on either shared prosperity or ecological sustainability is an essential backdrop to
                            stories about the political economy of our time.

                        </ListItem>
                        <ListItem>

                            - that you cannot provide rigorous journalism in a North American context without acknowledging and challenging the historical legacy and continuing existence of racialized violence and dispossession.
                        </ListItem>
                        <ListItem>

                            - that, while a nuanced and fact-based approach to geopolitical conflict is necessary, such reporting must be grounded in a recognition of the disastrous consequences of US efforts to achieve and maintain its global hegemonic status.
                        </ListItem>
                    </List>
                </Typography>
            </Box></div>
    )
}

export default AboutTNB