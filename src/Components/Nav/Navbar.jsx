import { Nav, NavLogo, Wrapper } from "./Nav.style"
import sck from '../../assets/sck.svg';
import { NavContainer, HamburgerContainer } from "../../Global.style";
import { Ul, NavbarLink,  Hamburger, Bars } from "./Nav.style"
import { useState } from 'react'



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(() => setIsOpen(!isOpen))
  }
  return(
    //<Wrapper>
      <NavContainer>
          <Nav>
              <NavLogo 
              src={sck}
              alt="stitch custom's logo"
              />
                <Hamburger onClick={toggle} alt="hamburger icon">
                  <Bars isOpen={isOpen}></Bars>
                </Hamburger>
              <Ul isOpen ={isOpen}>
                  <NavbarLink onClick={toggle} to='/stitch-customs-keyboards'>Home</NavbarLink>
                  <NavbarLink onClick={toggle} to='/stitch-customs-keyboards/work'>Work</NavbarLink>
                  <NavbarLink onClick={toggle} to='/stitch-customs-keyboards/contact'>Contact</NavbarLink>
              </Ul>
          </Nav>
        </NavContainer>
    //</Wrapper>
  )
}

export default Navbar;