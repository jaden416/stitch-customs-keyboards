import styled from "styled-components";
import { Container } from "../../Global.style";

export const FormContainer = styled(Container)`
    display: grid;
    max-width: 1264px;
    margin-inline: auto;
    margin-top: 42px;
    margin-bottom: 66px;
    grid-template-columns: 1fr;
    gap: 20px;


    > * {
        padding-inline: 32px;
    }

    @media (min-width: 1080px)
 {
    margin-top: 88px;
 }

     //awkward viewport width needed re-adjustment
     @media (min-width: 600px){
        padding-inline: 42px;
    }

    @media(min-width: 1080px){
        margin-top: 88px;
    }
`

export const Form = styled.form`
    max-width: 700px;
    display: grid;
    margin-inline: auto;
    gap: 20px;

    @media (min-width: 565px) {
        
    }
`

export const FormInput= styled.input`
    background-color: transparent;
    width: auto;
    border: .5px solid;
    border-radius: 3px;
    text-indent: 15px;
    padding: 5px 0;
    color: black;
`
export const FormInfo = styled.textarea`
    position: relative;
    width: auto;
    border: .5px solid black;
    border-radius: 3px;
    text-indent: 15px;
    padding: 5px 0;
    height: 100px;
    max-width: 700px

`



export const Submit = styled.button`
    margin-inline: auto;
    padding-inline: 5px;
    background-color: none;
    border: .5px solid black;
    border-radius: 3px;
    padding: 5px 18.5px;
    color: black;
`