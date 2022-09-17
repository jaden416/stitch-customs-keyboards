import styled, { createGlobalStyle } from "styled-components";

export  const GlobalStyles = createGlobalStyle`
    :root {
  font-family: Poppins, sans-serif;
  --fs-600: 1.5rem;
  --fs-400:  .8125rem;
}

/*RESET*/

*, *:before, *:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

ul{
  list-style: none;
}

///making forms easier to work with
input,
button,
textarea,
select {
    font: inherit;    
}

//removing button styles
button {
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
}
textarea{
  color: #8e8e8e
}
`
export const Container = styled.div`
  display: block;
  overflow: hidden;
  margin-top: ${(props) => props.marginTop};
  padding-left: ${(props) => props.paddingLeft};
  padding-inline: ${(props) => props.paddingInline};
  margin-inline: ${(props) => props.marginInline};
  width: ${(props) => props.width};

  > * + * {
    margin-bottom: ${(props) =>props.flow};
  }

`
export const NavContainer = styled.div`
  
  box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  
`

export const HamburgerContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
export const NavLogo = styled.img`
  
  height: 1em;
`

export const Header = styled.h2`
    font-size: 24px;
    margin-top: ${(props) => props.marginTop};
    margin-bottom: 12px;

    @media (min-width: 768px){
        font-size: 32px;
    }

`
export const Para = styled.p`
        font-size: .8125em;

    @media (min-width: 600px){
        font-size: 1em;
    }
`