import { useState } from 'react'
import { Container, Header, Para} from '../../Global.style'
import { FormContainer, Form, FormInput, FormInfo, Submit,} from './Form.style'

export const Form1 = () => {
    const height = {
        height: "50px"
    }
    return(
        <FormContainer>
            <Header>Email me for Commissions</Header>
            <Para>
                The Standard Commission fee is $40 USD, which includes wire balancing, stabilizer lubrication, sound dampening and assembly. 
                However, if other services are required (i.e Lubing and filming, soldering, photos etc...) the commission fee may increase. 
                (Shipping to the customer is not included in this price)
            </Para>

            <Container marginTop= "40px">
            <Form>
                <FormInput placeholder='Name'/>
                <FormInput placeholder='Address'/>
                <FormInput placeholder='Phone'/>
                <FormInput placeholder='Subject'/>
                <FormInfo  placeholder='Type your message here..' height="100"></FormInfo>
                <Submit type="submit">Submit</Submit>
            </Form>
            </Container>

        </FormContainer>
    )
}

export default Form1;