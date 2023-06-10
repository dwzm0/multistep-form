import React from 'react'
import { Heading, Text, Section, Footer, ForwardButton } from '../../globalStyle'
import { FormFirstForm, FormFirstInput, FormFirstLabel } from './FormFirst.elements'

const FormFirst = (): JSX.Element => {
  return (
    <>
         <Section>
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
          </Section>
    </>
  )
}

export default FormFirst
