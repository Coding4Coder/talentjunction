import React from 'react';
import { NavLink } from 'react-router-dom';
import {Logo, TopHeader, TopNavBar} from './Styles/Header.style';
import tgLogo from '../img/logo.png';

const  Header = () => {
  return (
    <TopHeader> 
        <Logo>
            <img src={tgLogo} alt="Talent Junction" />
        </Logo> 
                    <TopNavBar>
                        <ul>
                            <li><NavLink to="/home/">Home</NavLink></li>
                            <li><NavLink to="/about-us/" >About Us</NavLink></li>
            
                        </ul>
                    </TopNavBar>
               
        </TopHeader> 
  )
}

export default Header;
