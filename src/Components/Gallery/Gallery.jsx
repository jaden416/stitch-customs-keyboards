import { useState } from 'react'
import pic1 from '../../assets/key1.jpg';
import arrow from '../../assets/arrow.svg';
import data from './galleryData';
import { GalleryContainer, GalleryFlex, GalleryImage, FlexItem, LeftArrow, RightArrow } from "./Gallery.style";

import { Container, Header } from "../../Global.style";

 const Gallery = () =>{

    const [image, setImage] = useState(0)
    
    const galleryList = data.map((item) => {
        return(
            <GalleryImage
            key = {item.id}
            src = {item.image}
            />
            ) 
    })

    function next(){
        image < data.length - 1 && setImage(prevImage => prevImage + 1)
        
    }

    function prev(){
        image > 0 && setImage(prevImage => prevImage - 1)
    }
    

    return (
       <GalleryContainer>
        <Header>Past Builds</Header>
        <Container
            marginInline="auto"
            paddingInline="auto"
        >
            <GalleryFlex>
                <FlexItem>
                    <LeftArrow 
                        src={arrow} 
                        onClick= {prev}
                        alt= "left arrow icon"
                        type="image"
                    />
                </FlexItem>

                <FlexItem>{galleryList[image]}</FlexItem>

                <FlexItem>
                    <RightArrow 
                        src={arrow}
                        onClick= {next}
                        alt= "right arrow icon"
                        type="image"
                    />
                </FlexItem>
            </GalleryFlex>
        </Container>
       </GalleryContainer>
    )
}


export default Gallery;