import React, { useState, forwardRef } from 'react';
import { Box, Typography, Button, Grid, Paper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MainBox from './Components/MainBox';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '25px'
};

const buttonStyle = {
    marginTop: '15px',
    textTransform: "none",
    borderRadius: "25px",
    height: "45px",

};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

function WriteArtcle() {
    return (
        <MainBox>
            <Box sx={{ flexGrow: 1, marginInline: "20px", marginTop: "100px", width: "100%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant='h5' color='#025464'><strong>Start writing your article here</strong></Typography>
                    </Grid>
                    <Grid item xs={2} style={{ paddingLeft: "30px", paddingTop: "40px" }}>
                        <Typography variant='h6' color='#025464'>Headline</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Item>
                            <TextField
                                type='text'
                                multiline
                                fullWidth
                                rows={1}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={2} style={{ paddingLeft: "30px", paddingTop: "40px" }}>
                        <Typography variant='h6' color='#025464'>Sub headline</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Item>
                            <TextField
                                type='text'
                                multiline
                                fullWidth
                                rows={2}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={2} style={{ paddingLeft: "30px", paddingTop: "40px" }}>
                        <Typography variant='h6' color='#025464'>Description</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Item>
                            <TextField
                                type='text'
                                multiline
                                fullWidth
                                rows={3}

                            />
                        </Item>
                    </Grid>
                    <Grid item xs={2} style={{ paddingLeft: "30px", paddingTop: "40px" }}>
                        <Typography variant='h6' color='#025464'>Story</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Item>
                            <TextField
                                type='text'
                                multiline
                                fullWidth
                                rows={20}

                            />
                        </Item>
                    </Grid>
                    <Grid item xs={2} style={{ paddingLeft: "30px", paddingTop: "40px" }}>
                        <Typography variant='h6' color='#025464'>Resources</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Item>
                            <TextField
                                type='text'
                                multiline
                                fullWidth
                                rows={2}

                            />
                        </Item>
                    </Grid>
                    <Grid item xs={2} style={{ paddingLeft: "30px", paddingTop: "40px" }}>
                        <Typography variant='h6' color='#025464'>Uploads</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Item>
                            <TextField
                                type='text'
                                multiline
                                fullWidth
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: "25px" }}>
                        <Button variant='contained' style={{ height: "35px", backgroundColor: '#025464', textTransform: 'none', marginRight: "20px" }}>Send to Publish</Button>
                        <Button variant='contained' style={{ height: "35px", backgroundColor: '#025464', textTransform: 'none' }}>Cancel</Button>
                    </Grid>
                </Grid>
            </Box>

        </MainBox>
    )
}

export default WriteArtcle