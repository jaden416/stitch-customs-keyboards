import hero from '../../assets/image-keyboard.jpg';
import { FlexContainer, Container } from '../../Global.style';
import { HeroContainer, HeroDesc, HeroTitle, HeroButton, HeroImg, GridItem1, GridItem2 } from './Hero.style'


const Hero = () => {


    
    return(
        <HeroContainer>
            <GridItem1  
                marginTop = "12px"
                paddingInline = "32px"
                flow = "24px"
            >
                <HeroTitle>Stitch Custom Keyboards</HeroTitle>
                <HeroDesc>Making mechanical keyboards for people wanting to get into the hobby!</HeroDesc>
                <HeroButton to='/stitch-customs-keyboards/work'>My Work</HeroButton>
            </GridItem1>
            
            <GridItem2
                paddingLeft = "32px"
            >
                <HeroImg  src={hero} alt="keyboard"/>
            </GridItem2>

        </HeroContainer>   

    )
}

export default Hero

{/*  */}