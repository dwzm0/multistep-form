import React from 'react'
import { Heading, Text, ForwardButton, ButtonMobileContainer, GeneralFormContainer } from '../../globalStyle'
import { FormFirstForm, FormFirstInput, FormFirstLabel } from './FormFirst.elements'
import { useResize } from '../../hooks/index'

const FormFirst = (): JSX.Element => {
  const showSmallBg = useResize()

  return (
    <>
         <GeneralFormContainer>
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
            {!showSmallBg ? <ForwardButton>Next Step</ForwardButton> : null }
        </GeneralFormContainer>
          <ButtonMobileContainer>
              {showSmallBg ? <ForwardButton>Next Step</ForwardButton> : null }
          </ButtonMobileContainer>
    </>
  )
}

export default FormFirst
