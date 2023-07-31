import React, { useContext, useState, useEffect } from 'react';
import './NavBar.css';
import { AppBar, Typography, Toolbar, Box, IconButton, Badge, Menu, MenuItem, Button, Tooltip } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import { useAuth0 } from "@auth0/auth0-react";
import { UserInfo } from './App';

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  &:hover {
    background-color: '#81f4d4';
    transform: scale(1.2);
  }
  `}
`;
const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();

    const { isAuthenticatedUser, setIsAuthenticatedUser, userObj, setUserObj } = useContext(UserInfo)

    const navigate = useNavigate();

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onHomeClickHandller = () => {
        navigate("/");
    }

    const signInHandller = () => {
        loginWithRedirect().then(result => {
            console.log(result);
        })
    }

    const logoutHandller = () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
    }

    const writeArticleHandller = () => {
        navigate("/writeArticle");
    }

    useEffect(() => {
        setIsAuthenticatedUser(isAuthenticated);
        setUserObj(user)
    }, [isAuthenticated, user])

    return (<>
        <AppBar component="nav" style={{ width: "100%", height: "50px" }} color="transparent" position="fixed" >
            <Toolbar className='nav_bar'>
                <IconButton className="logo" onClick={onHomeClickHandller}>
                    <NewspaperIcon className="newspaperIcon" styles={{ width: "30px", height: "30px" }} />
                    <Typography variant="h4" color="#025464"><strong>News Buletin</strong></Typography>
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>

                    {isAuthenticated ? <Button variant='contained' style={{ height: "35px", backgroundColor: '#025464', textTransform: 'none' }} onClick={logoutHandller} >
                        Log Out
                    </Button> : <Button variant='contained' style={{ height: "35px", backgroundColor: '#025464', textTransform: 'none' }} onClick={signInHandller} >
                        Sign In
                    </Button>}
                    {isAuthenticated && <><Tooltip title='Write Your Article'>
                        <IconButton size="large" onClick={writeArticleHandller} color="#025464">
                            <EditNoteIcon className='navbar_buttons'>
                                <Typography variant="h6" color="#025464">Write</Typography>
                            </EditNoteIcon>
                        </IconButton>
                    </Tooltip>
                        <Tooltip title='Notifications'>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="#025464"
                            >
                                <Badge badgeContent={0} color="error">
                                    <NotificationsIcon className='navbar_buttons' />
                                </Badge>
                            </IconButton>
                        </Tooltip></>}
                    <Tooltip title={isAuthenticated ? user.name : ''}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="#025464"
                        >
                            <StyledAvatar className='navbar_buttons' src={isAuthenticated ? user.picture : "N"}></StyledAvatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="show more"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={handleClick}
                    >
                        <MoreIcon />
                    </IconButton>
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem >Notifications</MenuItem>
                        <MenuItem>Write</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    </>
    )
}

export default NavBar