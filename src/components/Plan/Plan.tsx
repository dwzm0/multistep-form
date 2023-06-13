/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { MainContainer, SubHeading, Heading, Text, StyledSection, TextWrapper, Footer, ForwardButton, BackButton } from '../../globalStyle'
import { PlanFormContainer, PlanInput, PlanForm, PlanLable, LogoContainer, Logo, PlanTextWrapper, PriceText, YearPlanTogglerContainer, YearPlanTogglerLabel, YearPlanTogglerInput, YearPlanTogglerSpan } from './Plan.elements'

import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useAppState } from '../../state'

interface FormSecondPropsInt {
  arcadeLogo: string
  advancedLogo: string
  proLogo: string
  proName: string
  arcadeName: string
  advancedName: string
  arcadePrice: string
  advancedPrice: string
  proPrice: string
  darkText: boolean
  headerText: string
  subText: string
  togglerMonth: string
  togglerYear: string
}

const Plan = ({ togglerMonth, togglerYear, headerText, subText, darkText, arcadeLogo, advancedLogo, proLogo, arcadeName, advancedName, proName, arcadePrice, advancedPrice, proPrice }: FormSecondPropsInt): JSX.Element => {
  const [state, setState] = useAppState()
  const { handleSubmit, register } = useForm({ defaultValues: state })
  const navigate = useNavigate()

  const saveData = (data: any): any => {
    setState({ ...state, ...data })
    console.log(data)
    console.log(state)

    navigate('/addons')
  }

  return (
    <>
      <MainContainer>
        <StyledSection>
            <TextWrapper>
              <Heading>{headerText}</Heading>
              <Text>{subText}</Text>
            </TextWrapper>
            <PlanForm onSubmit={handleSubmit(saveData)}>
               <PlanFormContainer>
                <PlanInput {...register('plan_option')} type="radio" value="arcade" id="arcade"/>
                <PlanLable htmlFor='arcade'>
                    <LogoContainer>
                      <Logo src={arcadeLogo}/>
                    </LogoContainer>
                    <PlanTextWrapper>
                      <SubHeading darkText={darkText}>{arcadeName}</SubHeading>
                      <PriceText>{arcadePrice}</PriceText>
                    </PlanTextWrapper>
                </PlanLable>

                <PlanInput {...register('plan_option')} type="radio" value="advanced" id="advanced"/>
                <PlanLable htmlFor='advanced'>
                    <LogoContainer>
                      <Logo src={advancedLogo}/>
                    </LogoContainer>
                    <PlanTextWrapper>
                      <SubHeading darkText={darkText}>{advancedName}</SubHeading>
                      <PriceText>{advancedPrice}</PriceText>
                    </PlanTextWrapper>
                </PlanLable>

                <PlanInput {...register('plan_option')} type="radio" value="pro" id="pro"/>
                <PlanLable htmlFor='pro'>
                    <LogoContainer>
                      <Logo src={proLogo}/>
                    </LogoContainer>
                    <PlanTextWrapper>
                      <SubHeading darkText={darkText}>{proName}</SubHeading>
                      <PriceText>{proPrice}</PriceText>
                    </PlanTextWrapper>
                </PlanLable>

                </PlanFormContainer>

                  <YearPlanTogglerContainer>
                    <SubHeading darkText={true}>{togglerMonth}</SubHeading>
                        <YearPlanTogglerLabel>
                              <YearPlanTogglerInput type='checkbox' />
                              <YearPlanTogglerSpan />
                        </YearPlanTogglerLabel>
                    <SubHeading darkText={true}>{togglerYear}</SubHeading>
                  </YearPlanTogglerContainer>

                  <Footer>
                      <Link to='/'>
                        <BackButton>Go Back</BackButton>
                      </Link>
                      <ForwardButton>Next Step</ForwardButton>
                  </Footer>

            </PlanForm>

        </StyledSection>
       </MainContainer>
    </>
  )
}

export default Plan
