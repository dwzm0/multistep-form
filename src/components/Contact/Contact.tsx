/* eslint-disable @typescript-eslint/no-misused-promises */

import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '../../state'

import { MainContainer, Heading, Text, StyledSection, Footer, ForwardButton } from '../../globalStyle'
import { ContactForm, ContactInput, ContactFormLabel, LabelContainer, LabelError } from './Contact.elements'

interface Props {
  redBorder: boolean
}

const Contact = ({ redBorder }: Props): JSX.Element => {
  const [state, setState] = useAppState()
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ defaultValues: state, mode: 'onSubmit' })
  const navigate = useNavigate()

  const saveData = (data: any): any => {
    setState({ ...state, ...data })
    console.log(data)
    navigate('/plan')
  }

  return (
    <>
      <MainContainer>
         <StyledSection>
            <Heading>Personal info</Heading>
            <Text>Please provide your name, email address, and phone number.</Text>
            <ContactForm onSubmit={handleSubmit(saveData)}>
                    <LabelContainer>
                      <ContactFormLabel>Name</ContactFormLabel>
                      {<LabelError>{errors?.name?.message?.toString()}</LabelError>}
                    </LabelContainer>
                    <ContactInput

                    redBorder={((errors?.name) != null)}
                    placeholder='e.g Stephen King'
                    {...register('name', { required: 'Name is required' })}/>

                    <LabelContainer>
                      <ContactFormLabel>Email Address</ContactFormLabel>
                      {<LabelError>{errors?.email?.message?.toString()}</LabelError>}
                    </LabelContainer>
                    <ContactInput
                    redBorder={((errors?.email) != null)}
                    placeholder='e.g stephenking@lorem.com'
                    {...register('email', { required: 'Email is required' })} type="email"/>

                    <LabelContainer>
                      <ContactFormLabel >Phone Number</ContactFormLabel>
                      {<LabelError>{errors?.number?.message?.toString()}</LabelError>}
                    </LabelContainer>
                    <ContactInput
                    redBorder={((errors?.number) != null)}
                    placeholder='e.g +1234567890'
                    {...register('number', { required: 'Number is required' })}/>

                    <Footer>
                      <ForwardButton>Next Step</ForwardButton>
                    </Footer>
            </ContactForm>
          </StyledSection>
      </MainContainer>
    </>
  )
}

export default Contact
