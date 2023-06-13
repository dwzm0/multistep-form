import React from 'react'
import { MainContainer, Heading, Text, StyledSection, Footer, ForwardButton } from '../../globalStyle'
import { FormFirstForm, FormFirstInput, FormFirstLabel } from './Contact.elements'

const Contact = (): JSX.Element => {
  return (
    <>
      <MainContainer>
         <StyledSection>
            <Heading>Personal info</Heading>
            <Text>Please provide your name, email address, and phone number.</Text>
            <FormFirstForm>
                    <FormFirstLabel>Name</FormFirstLabel>
                    <FormFirstInput/>
                    <FormFirstLabel>Email Address</FormFirstLabel>
                    <FormFirstInput/>
                    <FormFirstLabel>Phone Number</FormFirstLabel>
                    <FormFirstInput/>
            </FormFirstForm>
            <Footer>
              <ForwardButton>Next Step</ForwardButton>
            </Footer>
          </StyledSection>
      </MainContainer>
    </>
  )
}

export default Contact
