import React from 'react'
import { Heading, Text, StyledSection, Footer, ForwardButton } from '../../globalStyle'
import { FormFirstForm, FormFirstInput, FormFirstLabel } from './FormFirst.elements'

const FormFirst = (): JSX.Element => {
  return (
    <>
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
    </>
  )
}

export default FormFirst
