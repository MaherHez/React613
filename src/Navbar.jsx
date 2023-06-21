import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";




const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  
`;

const MyButton = styled.button`
  padding: 1em;
  background-color: #386641;
  border-radius: 50px;
  color: white;
  border: none;
  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
  }
`;

const StyledSmallBox = styled.div`
  padding: 0.1em;
  border-radius: 1px;
  color: black;
  border: none;
  visibility: hidden;
  opacity: 0;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    visibility: visible;
    opacity: 1;
    padding: 0.1em;
    /* border-radius: 25px; */
    color: black;
/*     border: 1px black solid;
 */   
  }
`;


const StyledSmallLink = styled(Link)`
  color: black;
  grid-area: top;
  font-size: 0.8rem;
  margin: 0.3rem;
  padding:0;
  &:hover {
    transform: scale(1.1);
  }

`;

const StyledBarButton = styled.button`
  visibility: none;
  opacity: 0;
  background-color: #98C9A3;
  border: none;


  @media only screen and (max-width: 600px) {
    visibility: visible;
    opacity: 1;
    
  }
`;

const StyledLink = styled(Link)`
  color: black;
  grid-area: top;
  margin: 0.6rem;
  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 2s;
    transform: translateY(-100vh); 
  }
`;


const links = [
  {
    id: 1,
    to: "/",
    text: "home"
  },

  {
    id: 2,
    to: "/portfolio",
    text: "portfolio"
  },

  {

    id: 3,
    to: "/about",
    text: "About"
  },
  {
    id: 4,
    to: "/contact",
    text: "Contact"
  }
];


const SmallLinks = [
  {
    id:1,
    to: "/",
    text: "home"
  },

  {
    id:2,
    to: "/portfolio",
    text: "portfolio"
  },

  {
    id:3,
    to: "/about",
    text: "About"
  },
  {
    id:4,
    to: "/contact",
    text: "Contact"
  }
];

const Navbar = () => {
  const [open, SetOpen] = useState(false);  //magi

  return (
    <>
      <StyledNav>
        {links.map(link => <StyledLink to={link.to} key={link.id}>{link.text}</StyledLink>)}
      </StyledNav>
      <>
        <StyledBarButton onClick={() => SetOpen(!open)} > {/*  //Eventlistner som kör Setopen, 
        Om open är satt till true visas istället en stäng-knapp, representerad av FaTimes-ikonen, o
        ch om open är false visas en "hamburger"-knapp, representerad av FaBars-ikonen. */}
          {open ? <FaTimes /> : <FaBars />}
        </StyledBarButton>

        {open && ( // Om open är sant så utför den skiten det som står innanför parantesen. 
           <StyledSmallBox>
          {SmallLinks.map(link => <StyledSmallLink to={link.to} key={link.id} >{link.text}</StyledSmallLink> )}
          </StyledSmallBox> 
        )}
      </>
    </>

  );
};

export default Navbar;


