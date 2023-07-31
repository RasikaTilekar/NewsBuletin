import React, { useState, forwardRef } from 'react';
import { Box, Typography, TextField, Button, OutlinedInput, InputAdornment, IconButton, FormControl } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import Google from '@mui/icons-material/Google';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../public/google.svg'

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
    marginTop: '10px',
    textTransform: "none",
    borderRadius: "25px",
    height: "45px"
};




const SignIn = (props) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={style} zIndex={1000}>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginInline: "60px" }}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <NewspaperIcon className="newspaperIcon" />
                    <Typography id="modal-modal-title" variant="h4" component="h2" alignItems='center'>
                        <strong>Log in to see more</strong>
                    </Typography>
                </Box>
                <Box style={{ marginInline: "3%", marginTop: "20px", width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Email
                    </Typography>
                    <TextField
                        type='email'
                        id="outlined-size-small"

                        size="small"
                        style={{ borderRadius: '15px', width: "100%" }}
                    />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Password
                    </Typography>
                    <FormControl variant="outlined" style={{ width: "100%", borderRadius: '25px' }}>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            size='small'
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }

                        />
                    </FormControl>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        <strong>Forgotten your password?</strong>
                    </Typography>
                </Box>
                <Box style={{ marginInline: "3%", width: "100%", marginTop: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant='contained' fullWidth color='error' style={{ ...buttonStyle, fontSize: "medium" }}>Log In</Button>
                    <Typography variant='body2' sx={{ mt: 1, fontWeight: 900 }}>OR</Typography>

                    <Button variant='contained' fullWidth style={{ ...buttonStyle, fontSize: "medium" }} startIcon={<FacebookIcon />}>
                        Continue with Facebook
                    </Button>

                    <Button variant='outlined' fullWidth style={{ ...buttonStyle, fontSize: "medium" }} startIcon={<Google />}>
                        <Typography color='GrayText'>Continue with Google</Typography>
                    </Button>
                    <Typography variant='body2' align='center' sx={{ mt: 2 }} color='#767676'>
                        By continuing, you agree to The News Buletin's
                        <strong >Terms of Service</strong> and acknowledge that you've read
                        our Privacy Policy. Notice at collection.
                    </Typography>
                </Box>
            </Box>
        </Box>

    )
}

export default SignIn