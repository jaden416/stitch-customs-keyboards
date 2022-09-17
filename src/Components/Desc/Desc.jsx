import { DescContainer } from './Desc.style'
import { Header, Para} from '../../Global.style'

const Desc = () => {
    return (
        <DescContainer>
            <Header>About Me</Header>
            <Para>
                My name is Joshua Christie, and I'm a Senior at UCF, studying Electrical Engineering. 
                I've always had a passion for technology and building keyboards is an extension of that passion! 
                I started building keyboards around August 2020 and I'm really enjoying my time in the community!
            </Para>
            <Header 
                marginTop = "72px"
            >
                Why Custom Mechanical Keyboards?
            </Header>
            <Para>
                Compared to their retail counterparts, custom keyboards are a superior build sound and feel. 
                There is also almost endless customization when it comes to switches, keycaps, and layouts, many of which, 
                would never be found on a production keyboard such as Razer or Corsair.
            </Para>
        </DescContainer>
    )
}

export default Desc;