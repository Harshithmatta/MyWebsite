import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { lightTheme } from '../../utils/Themes';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, useMediaQuery } from '@mui/material';


const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: flex-start;
    cursor : pointer;
    align-items: center;
    text-decoration: none;
    @media screen and (max-width: 640px) {
      padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }
    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;


const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary}
`;



const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    transition: all 0.6s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    opacity: ${({ open }) => (open ? '100%' : '0')};
    z-index: ${({ open }) => (open ? '1000' : '-1000')};

`

export const MobileMenuLinks = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
       }
`;

// export  const MobileMenuLinks = styled.a`
//   color: ${({ theme }) => theme.text_primary};
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   :hover {
//     color: ${({ theme }) => theme.primary};
//   }

//   &.active {
//     border-bottom: 2px solid ${({ theme }) => theme.primary};
//   }
// `;


const Navbar
  = ({ darkMode, toggleDarkMode }) => {
    const isSmallScreen = useMediaQuery('(max-width:768px)')
    const [open, setopen] = React.useState(false);
    const theme = useTheme();
    return (<Nav>
      <NavContainer>
        <NavLogo to='/' theme={lightTheme} >
          <a href="/" style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer', textDecoration: 'None' }}>
            <DiCssdeck style={{ color: theme.primary }} size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        {isSmallScreen && (<IconButton color="inherit" onClick={toggleDarkMode} style={{ marginTop: "-6px", right: "40px" }}>
          {darkMode ? <Brightness7Icon style={{ fontSize: 30 , color: 'white' }} /> : <Brightness4Icon style={{ fontSize: 30 }} />}
        </IconButton>)}
        <MobileIcon>
          <FaBars onClick={() => {
            setopen(!open)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank" >
            GitHub Profile
          </GitHubButton>
          {!isSmallScreen && (<IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness7Icon style={{ fontSize: 32, color: 'white' }} /> : <Brightness4Icon style={{ fontSize: 32 }} />}
          </IconButton>)}
        </ButtonContainer>

        {
          open && (
            <MobileMenu open={open}>
              <MobileMenuLinks href="#about" onClick={() => {
                setopen(!open)
              }}>About</MobileMenuLinks>
              <MobileMenuLinks href='#skills' onClick={() => {
                setopen(!open)
              }}>Skills</MobileMenuLinks>
              <MobileMenuLinks href='#experience' onClick={() => {
                setopen(!open)
              }}>Experience</MobileMenuLinks>
              <MobileMenuLinks href='#projects' onClick={() => {
                setopen(!open)
              }}>Projects</MobileMenuLinks>
              <MobileMenuLinks href='#education' onClick={() => {
                setopen(!open)
              }}>Education</MobileMenuLinks>
              <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
            </MobileMenu>
          )
        }
      </NavContainer>

    </Nav>
    )
  }

export default Navbar;

