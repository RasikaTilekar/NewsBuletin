import React from 'react'
import { Box, Typography, Divider, IconButton, Button } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FeedIcon from '@mui/icons-material/Feed';
import { useNavigate } from "react-router-dom";

function Footer() {

    const navigate = useNavigate();

    const privacyPolicyHandller = () => {
        navigate("/privacyPolicy")
    }

    const TermsOfUseHandller = () => {
        navigate("/termsOfUse")
    }

    const StatementOfIndependanceHandller = () => {
        navigate("/statementOfIndependance")
    }

    const aboutTNBHandller = () => {
        navigate("/aboutTNB")
    }

    const onHomeClickHandller = () => {
        navigate("/");
    }

    return (
        <div style={{ borderRadius: '50px' }}>
            <Box style={{ backgroundColor: '#dee3e7', height: '350px', color: '#025464', marginTop: '20px' }}>
                <Box style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '15px', marginInline: '20px' }}>
                    <Box style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <IconButton onClick={onHomeClickHandller}>
                            <NewspaperIcon className="newspaperIcon" styles={{ width: "50px", height: "50px" }} />
                            <Typography variant="h4" color="#025464" style={{ display: 'flex', alignItems: 'center' }}><strong>News Buletin</strong></Typography>
                        </IconButton>
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <IconButton target='_blank' href="https://www.facebook.com/login/" style={{ color: '#025464' }}>
                            <FacebookIcon style={{ width: '30px', height: '30px' }} />
                        </IconButton>
                        <IconButton target="_blank" href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" style={{ color: '#025464' }}>
                            <TwitterIcon style={{ width: '30px', height: '30px' }} />
                        </IconButton>
                        <IconButton target='_blank' href="https://www.pinterest.ca/login/" style={{ color: '#025464' }}>
                            <PinterestIcon style={{ width: '30px', height: '30px' }} />
                        </IconButton>
                        <IconButton target='_blank' href="https://www.linkedin.com/login" style={{ color: '#025464' }}>
                            <LinkedInIcon style={{ width: '30px', height: '30px' }} />
                        </IconButton>
                        <IconButton target='_blank' href="https://www.instagram.com/accounts/login/" style={{ color: '#025464' }}>
                            <InstagramIcon style={{ width: '30px', height: '30px' }} />
                        </IconButton>
                        <IconButton target='_blank' href="https://thefeed.com/login" style={{ color: '#025464' }}>
                            <FeedIcon style={{ width: '30px', height: '30px' }} />
                        </IconButton>
                    </Box>
                </Box>
                <Divider style={{ marginInline: '20px' }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '15px', marginLeft: '30px', marginRight: '30px', marginTop: '10px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Typography style={{ paddingLeft: '10px' }}><strong>TNB</strong></Typography>
                        <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: "flex-start" }}>
                            <Button onClick={aboutTNBHandller} style={{ textTransform: 'none', color: '#025464' }}>About The News Buletin</Button>
                            <Button onClick={privacyPolicyHandller} style={{ textTransform: 'none', color: '#025464' }}>Our Team</Button>
                            <Button onClick={privacyPolicyHandller} style={{ textTransform: 'none', color: '#025464' }}>In The Media</Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Typography style={{ paddingLeft: '10px' }}><strong>SPOKESPERSON'S OFFICE</strong></Typography>
                        <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: "flex-start" }}>
                            <Button onClick={privacyPolicyHandller} style={{ textTransform: 'none', color: '#025464' }}> Latest Statements</Button>
                            <Button onClick={privacyPolicyHandller} style={{ textTransform: 'none', color: '#025464' }}>Briefing Highlights</Button>
                            <Button onClick={privacyPolicyHandller} style={{ textTransform: 'none', color: '#025464' }}>Briefing Transcripts</Button>
                            <Button onClick={privacyPolicyHandller} style={{ textTransform: 'none', color: '#025464' }}>Notes to Correspondents</Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Typography style={{ paddingLeft: '10px' }}><strong>TERMS & CONDITIONS</strong></Typography>
                        <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: "flex-start" }}>
                            <Button onClick={privacyPolicyHandller} style={{ textTransform: 'none', color: '#025464' }}>Privacy Policy</Button>
                            <Button onClick={TermsOfUseHandller} style={{ textTransform: 'none', color: '#025464' }}>Terms of Use</Button>
                            <Button onClick={privacyPolicyHandller} style={{ textTransform: 'none', color: '#025464' }}>Credits</Button>
                            <Button onClick={StatementOfIndependanceHandller} style={{ textTransform: 'none', color: '#025464' }}>Statement of Independence</Button>
                        </Box>
                    </Box>
                    <Box>
                        <Typography><strong>CONTACT US</strong></Typography>
                        <Box style={{ marginTop: '20px' }}>
                            <Typography>IWT - The News Buletin</Typography>
                            <Typography>231 N. Holliday St.</Typography>
                            <Typography>Baltimore, MD 21202</Typography>
                            <Typography>USA</Typography>
                            <Typography>(410) 800-4295</Typography>
                            <Typography>contact@thenewsbuletin.com</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box >
            <Box style={{ backgroundColor: '#025464', height: '50px', color: 'white' }}>
                <Typography align='center' style={{ paddingTop: '15px' }}>
                    &copy; 2023 Copyright News Buletin
                </Typography>
            </Box>
        </div >
    )
}

export default Footer