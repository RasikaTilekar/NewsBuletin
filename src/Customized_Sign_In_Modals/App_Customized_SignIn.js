import React, { forwardRef, useState, useRef, useEffect } from "react";
import './App.css';
import { Button, CssBaseline, Fade, Hidden, Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import NavBar from "../NavBar";

import { Route, Routes } from 'react-router-dom';

import MainNews from "../MainNews";
import Footer from '../FooterComponent/Footer.js';

import PrivacyPolicy from "../FooterComponent/TermsConditions/PrivacyPolicy";
import TermsOfUse from "../FooterComponent/TermsConditions/TermsOfUse";
import StatementOfIndependance from "../FooterComponent/TermsConditions/StatementOfIndependance";
import AboutTNB from "../FooterComponent/TNB/AboutTNB";
import OurTeam from "../FooterComponent/TNB/OurTeam";
import InTheMedia from "../FooterComponent/TNB/InTheMedia";
import Credits from '../FooterComponent/TermsConditions/Credits';
import SpokesPersonsOffice from '../FooterComponent/SpokesPersonsOffice/SpokesPersonsOffice';
import SignIn from "../SignIn";
import SignUp from "../SignUp";

//fded5b2c699644f7a20658c1903f8ea2

const style = {
    position: 'absolute',
    top: '10%',
    left: '7%',
    transform: 'translate(-10%, -30%)',
    boxShadow: 24,
    textTransform: 'none',
    p: 4,
    color: "black",
    backgroundColor: "white",
    borderRadius: "25px",
    height: "50px",
    width: "100px",
    fontSize: "large",
};

export const UserInfo = React.createContext(null)

const App = () => {
    //const [openSignIn, setOpenSignIn] = useState(false);
    //const [openSignUp, setOpenSignUp] = useState(false);

    const ref = useRef();

    //console.log(ref)

    const handleClose = () => {
        //setOpenSignIn(false)
    };

    const openSignInHandller = (open) => {
        // setOpenSignIn(open)
    }

    const openSignUpHandller = () => {
        // setOpenSignUp(true);
        // setOpenSignIn(false)
    }

    const signInHandller = () => {
        // setOpenSignIn(true);
        // setOpenSignUp(false);
    }

    const handleSignUpClose = () => {
        // setOpenSignUp(false)
    }

    return (
        <div style={{ overflow: Hidden }}>
            <UserInfo.Provider
                value={{}}>
                <div className="nav_bar">
                    <CssBaseline />
                    <NavBar openSignIn={openSignInHandller} />
                </div>

                <Routes>
                    <Route path="/" element={<MainNews />} />
                    <Route path="/aboutTNB" element={<AboutTNB />} />
                    <Route path="/ourTeam" element={<OurTeam />} />
                    <Route path="/inTheMedia" element={<InTheMedia />} />

                    <Route path="/spokesPersonsOffice" element={<SpokesPersonsOffice />} />

                    <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                    <Route path="/termsOfUse" element={<TermsOfUse />} />
                    <Route path="/credits" element={<Credits />} />
                    <Route path="/statementOfIndependance" element={<StatementOfIndependance />} />
                </Routes>

                <Modal
                    open={false}
                    onClose={handleSignUpClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ zindex: "1" }}
                    hideBackdrop={false}
                    disableEnforceFocus
                >
                    <Fade in={false}>
                        <Box>
                            <Button variant='contained' style={{ ...style }} onClick={signInHandller}>
                                <strong>Log in</strong>
                            </Button>
                            <SignUp ref={ref} />
                        </Box>
                    </Fade>
                </Modal>

                <Modal
                    open={false}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ zindex: "1" }}
                    hideBackdrop={false}
                    disableEnforceFocus
                >
                    <Fade in={false}>
                        <Box>
                            <Button variant='contained' style={{ ...style }} onClick={openSignUpHandller}>
                                <strong>Sign up</strong>
                            </Button>
                            <SignIn />
                        </Box>
                    </Fade>
                </Modal >

                <Footer />
            </UserInfo.Provider>
        </div >
    );
}

export default App;
