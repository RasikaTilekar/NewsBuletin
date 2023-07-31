import React, { useState } from "react";
import './App.css';
import { CssBaseline, Hidden, } from '@mui/material';

import NavBar from "./NavBar";

import { Route, Routes } from 'react-router-dom';

import MainNews from "./MainNews";
import Footer from './FooterComponent/Footer.js';

import PrivacyPolicy from "./FooterComponent/TermsConditions/PrivacyPolicy";
import TermsOfUse from "./FooterComponent/TermsConditions/TermsOfUse";
import StatementOfIndependance from "./FooterComponent/TermsConditions/StatementOfIndependance";
import AboutTNB from "./FooterComponent/TNB/AboutTNB";
import OurTeam from "./FooterComponent/TNB/OurTeam";
import InTheMedia from "./FooterComponent/TNB/InTheMedia";
import Credits from './FooterComponent/TermsConditions/Credits';
import SpokesPersonsOffice from './FooterComponent/SpokesPersonsOffice/SpokesPersonsOffice';
import WriteArtcle from "./WriteArtcle";

//fded5b2c699644f7a20658c1903f8ea2


export const UserInfo = React.createContext(null)


const App = () => {

  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const [userObj, setUserObj] = useState({});

  return (
    <div style={{ overflow: Hidden }}>
      <UserInfo.Provider
        value={{
          isAuthenticatedUser,
          setIsAuthenticatedUser,
          userObj,
          setUserObj
        }}
      >

        <div className="nav_bar">
          <CssBaseline />
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<MainNews />} />
          <Route path="/writeArticle" element={<WriteArtcle />} />
          <Route path="/aboutTNB" element={<AboutTNB />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/inTheMedia" element={<InTheMedia />} />

          <Route path="/spokesPersonsOffice" element={<SpokesPersonsOffice />} />

          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termsOfUse" element={<TermsOfUse />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/statementOfIndependance" element={<StatementOfIndependance />} />
        </Routes>


        <Footer />
      </UserInfo.Provider>
    </div >
  );
}

export default App;
