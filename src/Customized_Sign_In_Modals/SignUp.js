import React, { useState, forwardRef } from 'react';
import { Box, Typography, Button } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import Google from '@mui/icons-material/Google';
import NewspaperIcon from '@mui/icons-material/Newspaper';

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


const SignUp = forwardRef((props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={style} ref={ref} zIndex={1000}>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginInline: "20px" }}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <NewspaperIcon className="newspaperIcon" />
                    <Typography id="modal-modal-title" variant="h4" component="h2" alignItems='center'>
                        <strong>Sign up to see more</strong>
                    </Typography>
                </Box>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginInline: "20px", marginTop: '20px' }}>

                    <Box style={{ marginInline: "3%", marginTop: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button variant='contained' fullWidth color='error' style={{ ...buttonStyle, fontSize: "medium" }}><strong>Continue with email</strong></Button>
                        <Button variant='contained' fullWidth style={{ ...buttonStyle, fontSize: "medium" }} startIcon={<FacebookIcon />}>
                            <strong>Continue with Facebook</strong>
                        </Button>

                        <Button variant='outlined' fullWidth style={buttonStyle} startIcon={<Google />}>
                            <Typography color='GrayText' style={{ fontSize: "medium" }}><strong>Continue with Google</strong></Typography>
                        </Button>
                        <Typography variant='body2' align='center' sx={{ mt: 2 }} color='#767676'>
                            By continuing, you agree to The News Buletin's
                            <strong >Terms of Service</strong> and acknowledge that you've read
                            our Privacy Policy. Notice at collection.
                        </Typography>
                        <hr />
                    </Box>
                </Box>
                <Box style={{ marginInline: "3%", marginTop: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography>Already a member? <Button style={{ textTransform: "none" }}><strong> Log in </strong></Button></Typography>
                </Box>
            </Box>
        </Box>
    )
})

export default SignUp