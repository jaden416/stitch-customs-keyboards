import styled from "styled-components";
import { Container } from "../../Global.style";

export const DescContainer = styled(Container)`
    display: grid;
    max-width: 1264px;
    margin-inline: auto;
    margin-top: 42px;
    margin-bottom: 66px;
    grid-template-columns: 1fr;

    > * {
        padding-inline: 32px;
    }
    //awkward viewport width needed re-adjustment
    @media (min-width: 600px){
        padding-inline: 42px;
    }

    @media(min-width: 1080px){
        margin-top: 88px;
    }

`



