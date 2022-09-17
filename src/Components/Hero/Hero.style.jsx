import styled from "styled-components";
import { Container } from "../../Global.style";
import { Link } from 'react-router-dom'

export const HeroContainer = styled.div`
    display: grid;
    max-width: 1264px;
    margin-inline: auto;
    margin-top: 12px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    //grid-template-rows: 0fr 0fr;
    row-gap: 24px;
    grid-template-areas: "info info info info" "img img img img";

    //awkward viewport width needed re-adjustment
    @media (min-width: 600px){
        padding-inline: 42px;
    }
    @media (min-width: 768px){
        margin-top: 58px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-areas: "info info info info info info img img img img img img";
    }

`

export const GridItem1 = styled(Container)`
    grid-area: info;

    @media (min-width: 1080px){
        margin-top: 48px;
    }
`
export const GridItem2= styled(Container)`
    grid-area: img;
    

`
export const HeroTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 12px;

    @media (min-width: 768px){
        font-size: 32px;
    }

    @media (min-width: 1080px){
        font-size: 42px;
    }

`

export const HeroDesc = styled.p`
    font-size: .8125em;

    @media (min-width: 600px){
        font-size: 1em;
    }
`



export const HeroButton = styled(Link)`
    display: inline-block;
    padding: 12px 32px;
    max-width: max-content;
    color: white;
    font-weight: 600;
    text-decoration:none;
    border-radius: 4px;
    background-color: #3E3D92;
    transition: background-color 0.3s;
    margin-bottom: 0px;

    :hover{
        background-color: #6261AD
    }
`

export const HeroImg = styled.img`
    width: 100%;
    border-radius: 15px 0 0 15px;

    @media (min-width: 600px){
        border-radius: 15px
    }

    @media (min-width: 768px){
        max-height: 333px;
        object-fit: cover;
    }

        /* animation-duration: 300ms;
        animation-name: slidein;


        @keyframes slidein {
        from {
            margin-left: 100%;        
            opacity:0;
        }

        to {
            margin-left: 0%;
            width: 100%;
            opacity: 1;
        }
     } */
    
`
