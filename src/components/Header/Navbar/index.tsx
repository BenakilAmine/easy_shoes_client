import React from 'react';
import {
  Nav,
  NavLink,
//   Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink  to='/' >
          <h1>EasyShoes</h1>
        </NavLink>
        <NavMenu>
          <NavLink exact to='/' >
            Home
          </NavLink>
          <NavLink to='/allproducts' >
            All products
          </NavLink>
          <NavLink to='/account' >
            Account
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;