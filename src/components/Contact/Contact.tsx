/* eslint-disable @typescript-eslint/no-misused-promises */

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppState } from '../../state'

import { MainContainer, Heading, Text, StyledSection, Footer, ForwardButton, FormWrapper } from '../../globalStyle'
import { ContactForm, ContactInput, ContactTextWrapper, ContactFormLabel, LabelContainer, LabelError } from './Contact.elements'

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

  useEffect(() => {
    setState({ ...state, step: 1 })
  }, [])

  const saveData = (data: any): any => {
    setState({ ...state, ...data })
    console.log(data)
    navigate('/plan')
  }

  return (
    <>
      <MainContainer>
         <StyledSection>
            <ContactTextWrapper>
              <Heading>Personal info</Heading>
              <Text>Please provide your name, email address, and phone number.</Text>
            </ContactTextWrapper>
            <ContactForm onSubmit={handleSubmit(saveData)}>
                  <FormWrapper>
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
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })} type="email"/>

                    <LabelContainer>
                      <ContactFormLabel >Phone Number</ContactFormLabel>
                      {<LabelError>{errors?.number?.message?.toString()}</LabelError>}
                    </LabelContainer>
                    <ContactInput
                    redBorder={((errors?.number) != null)}
                    placeholder='e.g +123456789000'
                    {...register('number', {
                      required: 'Number is required',
                      pattern: {
                        value: /^\+?([0-9]{3})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/,
                        message: 'Invalid number format'
                      }
                    })}/>
                  </FormWrapper>

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
