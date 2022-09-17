import styled from "styled-components";
import { Link } from 'react-router-dom'


export const Wrapper = styled.div`
    position: fixed;
    




  > *{
  position: sticky;
}
`
export const Nav = styled.nav`

  padding: 0 2rem;
  max-width: 1200px;
  margin-inline: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  //awkward viewport width needed re-adjustment
  @media (min-width: 600px){
      padding-inline: 74px
    }

`

export const NavbarLink = styled(Link)`
color: black;
text-decoration:none;
padding: 1rem 0;
transition: color 0.3s;

:hover{
    color: #677286
}
`

export const NavLogo = styled.img`
  padding: 1.5rem 0;
  height: 1em;
`

export const Ul = styled.ul`

display: flex;
gap: 3em;


@media (max-width: 768px) {
  overflow:hidden;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  align-items: center;
  max-height: ${({isOpen}) => (isOpen ? "300px" : "0px")};
  transition: max-height 0.3s ease-in;
}
`

export const Hamburger = styled.div`
  cursor: pointer;
  background: none;
  position: relative;
  border: none;
  width: 24px;
  height: 26px
`
export const Bars = styled.div`
  display: none;
  top: 10px;
  position:absolute;
  width: 24px;
  height: 2px;
  transition: all 0.3s;
  

  ::before, ::after {
      content: '';
      position: absolute;
      background-color: black;
      width: 24px;
      height: 2px;
  }

  ::before{
      top: 3px;
      left: 0px;
  }

  ::after{
      top: -3px;
      left: 0px;
  }

  ::after{
    /* transform: ${({isOpen}) => (isOpen ? "rotate(45deg) translate(4px, 0px);" : "")}; */
  }

  ::before{
    /* transform: ${({isOpen}) => (isOpen ? "rotate(-45deg) translate(4px, 0px)" : "")}; */
  }

  @media (max-width: 768px) {
    display: block;
  }
`