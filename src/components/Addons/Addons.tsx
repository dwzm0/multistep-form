/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { FormWrapper, MainContainer, Text, Heading, StyledSection, TextWrapper, Footer, ForwardButton, BackButton } from '../../globalStyle'
import { AddonTextWrapper, AddonLable, CheckMark, AddonPriceText, AddonsForm, AddonContainer, AddonSubheading, AddonText, CheckMarkInput } from './Addons.elements'

import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useAppState } from '../../state'

interface AddonsFormPropsInt {
  headerText: string
  subText: string
  addons: {
    online_service: {
      title: string
      description: string
      price: {
        yearly: number
        monthly: number
      }
    }
    larger_storage: {
      title: string
      description: string
      price: {
        yearly: number
        monthly: number
      }
    }
    customizable_profile: {
      title: string
      description: string
      price: {
        yearly: number
        monthly: number
      }
    }
  }
}

const Addons = ({ headerText, subText, addons }: AddonsFormPropsInt): JSX.Element => {
  const [state, setState] = useAppState()
  const { handleSubmit, register } = useForm({ defaultValues: state })
  const navigate = useNavigate()

  const saveData = (data: any): any => {
    setState({ ...state, ...data })
    console.log('this is data = ', data)
    console.log('this is state = ', state)
    navigate('/checkout')
  }
  return (
    <>
      <MainContainer>
        <StyledSection>
            <TextWrapper>
                <Heading>{headerText}</Heading>
                <Text>{subText}</Text>
            </TextWrapper>
            <AddonsForm onSubmit={handleSubmit(saveData)}>

            <FormWrapper>

                <AddonContainer>

                    <CheckMarkInput {...register('plan_addon')} type='checkbox' value={JSON.stringify(addons.online_service)} id="online_service"/>

                    <AddonLable htmlFor='online_service'>
                        <CheckMark />
                        <AddonTextWrapper>
                            <AddonSubheading darkText={true}>{addons.online_service.title}</AddonSubheading>
                            <AddonText>{addons.online_service.description}</AddonText>
                        </AddonTextWrapper>
                        <AddonPriceText>+${state.yearPlan ? addons.online_service.price.yearly : addons.online_service.price.monthly}/mo</AddonPriceText>
                    </AddonLable>
                </AddonContainer>
                <AddonContainer>

                    <CheckMarkInput {...register('plan_addon')} type='checkbox' value={JSON.stringify(addons.larger_storage)} id="larger_storage"/>

                    <AddonLable htmlFor='larger_storage'>
                        <CheckMark />
                            <AddonTextWrapper>
                                <AddonSubheading darkText={true}>{addons.larger_storage.title}</AddonSubheading>
                                <AddonText>{addons.larger_storage.description}</AddonText>
                            </AddonTextWrapper>
                            <AddonPriceText>+${state.yearPlan ? addons.larger_storage.price.yearly : addons.larger_storage.price.monthly}/mo</AddonPriceText>
                    </AddonLable>
                </AddonContainer>
                <AddonContainer>

                    <CheckMarkInput {...register('plan_addon')} type='checkbox' value={JSON.stringify(addons.customizable_profile)} id="customizable_profile"/>

                    <AddonLable htmlFor='customizable_profile'>
                        <CheckMark />
                            <AddonTextWrapper>
                                <AddonSubheading darkText={true}>{addons.customizable_profile.title}</AddonSubheading>
                                <AddonText>{addons.customizable_profile.description}</AddonText>
                            </AddonTextWrapper>
                            <AddonPriceText>+${state.yearPlan ? addons.customizable_profile.price.yearly : addons.customizable_profile.price.monthly}/mo</AddonPriceText>
                    </AddonLable>

                </AddonContainer>

            </FormWrapper>

                <Footer>
                    <Link to='/plan'>
                        <BackButton>Go Back</BackButton>
                    </Link>
                    <ForwardButton>Next Step</ForwardButton>
                </Footer>

            </AddonsForm>
        </StyledSection>
      </MainContainer>
    </>
  )
}

export default Addons
