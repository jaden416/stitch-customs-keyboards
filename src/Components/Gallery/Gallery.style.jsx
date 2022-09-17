import styled from "styled-components";

import { Container } from "../../Global.style";

export const GalleryContainer = styled(Container)`
    display: grid;
    max-width: 1264px;
    margin-inline: auto;
    margin-top: 42px;
    margin-bottom: 66px;
    grid-template-columns: 1fr;
    gap: 20px;




    > * {
        padding-inline: 32px;
     @media (max-width: 400px) {
        :last-child{
        padding-inline: 0px;
       }
     }
    }


    //awkward viewport width needed re-adjustment
    @media (min-width: 600px){
        padding-inline: 42px;
    }

    @media(min-width: 1080px){
        margin-top: 88px;
    }
`

export const GalleryFlex = styled.div`
        display: flex;
        width: 90%;
        gap: 5px;

        margin-inline: auto;
       

`

export const FlexItem = styled.div`
    max-width: 650px;
    justify-content: center;
    align-items: center;
    align-self: center;
`
export const GalleryImage = styled.img`
    display: block;
    margin-inline: auto;
    width: 90%;
    max-width: 600px;
    border-radius: 5%;
    aspect-ratio: 1;
    object-fit: cover;
`

export const LeftArrow = styled.input`
    transform: rotate(180deg);
    cursor: pointer;

`

export const RightArrow = styled.input`
    cursor: pointer;
    flex: 1;
`

// -----------------------------------------------------------

//Making a function that RETURNS a styled component but is not a styled component itself.

