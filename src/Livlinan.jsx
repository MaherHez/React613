import React from 'react';
import NyNavbar from './NyNavbar';
import { FlexContainer,NavContainer, 
  NavWrapper, LogoContainer, StyledImg } from './App'
  import logo from './assets/mux.png';


function Livlinan() {
  return (

    <FlexContainer>
    <NavContainer>
    <LogoContainer><StyledImg src={logo} alt="logo" /></LogoContainer>
    <NavWrapper>
    <NyNavbar />
    </NavWrapper>
    </NavContainer>
    </FlexContainer>
  );
}

export default Livlinan;
