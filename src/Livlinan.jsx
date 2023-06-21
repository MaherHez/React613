import React from 'react';
import NyNavbar from './NyNavbar';
import { FlexContainer,NavContainer, 
  NavWrapper, LogoContainer, StyledImg } from './App'
  import logo from './assets/mux.png';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const StyledHeader = styled.div `
display: flex;
justify-content: center;

`;

const StyledText = styled.div `
display: flex;
justify-content: center;
text-align: center;

`;





function Livlinan() {
  return (

    <FlexContainer as={motion.div}
     intial={{opacity: 0}} 
     animate={{opacity: 1}} 
     exit={{opacity: 0}}>
    <NavContainer>
    <LogoContainer><StyledImg src={logo} alt="logo" /></LogoContainer>
    <NavWrapper>
    <NyNavbar />
    </NavWrapper>
    </NavContainer>  
    <StyledHeader><h1>Livlinan Familjehem</h1></StyledHeader>
    <StyledText><p>A website designed with the purpose of facilitating communication between families, social services, and children.</p></StyledText>
    </FlexContainer>
  );
}

export default Livlinan;
