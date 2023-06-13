import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { SecondButton } from "./Main";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 700;
  }
`;
const StyledBurger = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  z-index: 1;
  background-color: #0D0D0D;
  padding-bottom: 85px;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
const StyledUl = styled.ul`
 position: fixed;
 top: -20px;
 background-color: #232323;
 border-bottom: 1px solid #949494;
 width: 100vw;
 height: 300px;
 list-style: none;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding-bottom: 3em;
 li{
  margin-top: 2.5em;
  padding-right: 2.8em;
 }
`;
const BrgrBtn = styled.button`
  z-index: 1000;
  position: fixed;
  align-self: flex-end;
  margin: 1em;
  border: none;
  background: rgba(0,0,0,0.0);
  svg {
    font-size: 1.8rem;
    color: #EEEEEE;
  }
`;
const StyledLink = styled.a`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #EEEEEE;
  &:hover {
    text-decoration: underline;
  }
`;
;
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <GlobalStyle />
      <StyledBurger>
        <BrgrBtn onClick={handleClick}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </BrgrBtn>
        {isOpen && (
          <StyledUl>
            {links.map((link) => (
              <li key={link.id}>
                <StyledLink href={link.to}>{link.text}</StyledLink>
              </li>
            ))}
          </StyledUl>
        )}
      </StyledBurger>
    </>
  );
}
const StyledNav = styled.ul`
  background-color: #0D0D0D;
  list-style-type: none;
  display: flex;
  align-items: center;
  li{
    border-left: 1px solid #EEEEEE;
    padding: 0 1.2em;
  }
`;
const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100;
  background-color: #0D0D0D;
  padding: 0 2em;
  grid-area: top;
  @media screen and (max-width: 600px) {
    display: none;}
    h1{
      color: #EEEEEE;
      font-size: 20px;
      align-self: center;
    }
`;
export const BigNav = () => {
  return (
    <NavWrap>
      <h1>Omar Abubeker</h1>
      <StyledNav>
        <li>
          <StyledLink href="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="#about">About</StyledLink>
        </li>
        <li>
          <StyledLink href="#footer">Contact</StyledLink>
        </li>
        <SecondButton>Download CV</SecondButton>
      </StyledNav>
    </NavWrap>
  );
};
export default Navbar;