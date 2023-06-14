/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { MainContainer, SubHeading, Heading, Text, StyledSection, TextWrapper, Footer, ForwardButton, BackButton } from '../../globalStyle'
import { TogglerText, ExtraText, PlanFormContainer, PlanInput, PlanForm, PlanLable, LogoContainer, Logo, PlanTextWrapper, PriceText, YearPlanTogglerContainer, YearPlanTogglerLabel, YearPlanTogglerInput, YearPlanTogglerSpan } from './Plan.elements'

import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useAppState } from '../../state'

interface FormSecondPropsInt {
  arcadeLogo: string
  advancedLogo: string
  proLogo: string
  plans: {
    arcade: {
      title: string
      price: {
        yearly: number
        monthly: number
      }
    }
    advanced: {
      title: string
      price: {
        yearly: number
        monthly: number
      }
    }
    pro: {
      title: string
      price: {
        yearly: number
        monthly: number
      }
    }
  }
  darkText: boolean
  headerText: string
  subText: string
  togglerMonth: string
  togglerYear: string
}

const Plan = ({ togglerMonth, togglerYear, headerText, subText, darkText, arcadeLogo, advancedLogo, proLogo, plans }: FormSecondPropsInt): JSX.Element => {
  const [state, setState] = useAppState()
  const [yearPlan, setYearPlan] = useState(false)
  const { handleSubmit, register, setValue } = useForm({ defaultValues: state })
  const navigate = useNavigate()

  const saveData = (data: any): any => {
    const planArr = Object.entries(plans)
    console.log(planArr)
    const selectedPlan = planArr.filter((plan) => plan[1].title === data.plan_option)[0][1]
    console.log(selectedPlan)
    setState({ ...state, ...data, ...selectedPlan })
    console.log('this is data = ', data)
    console.log('this is state = ', state)

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
                <PlanInput {...register('plan_option')} type="radio" value={plans.arcade.title} id="arcade"/>
                <PlanLable htmlFor='arcade'>
                    <LogoContainer>
                      <Logo src={arcadeLogo}/>
                    </LogoContainer>
                    <PlanTextWrapper>
                      <SubHeading darkText={darkText}>{plans.arcade.title}</SubHeading>
                      <PriceText>${yearPlan ? plans.arcade.price.yearly : plans.arcade.price.monthly}/yr</PriceText>
                      {yearPlan && <ExtraText>2 months free</ExtraText> }
                    </PlanTextWrapper>
                </PlanLable>

                <PlanInput {...register('plan_option')} type="radio" value={plans.advanced.title} id="advanced"/>
                <PlanLable htmlFor='advanced'>
                    <LogoContainer>
                      <Logo src={advancedLogo}/>
                    </LogoContainer>
                    <PlanTextWrapper>
                      <SubHeading darkText={darkText}>{plans.advanced.title}</SubHeading>
                      <PriceText>${yearPlan ? plans.advanced.price.yearly : plans.advanced.price.monthly}/yr</PriceText>
                      {yearPlan && <ExtraText>2 months free</ExtraText> }

                    </PlanTextWrapper>
                </PlanLable>

                <PlanInput {...register('plan_option')} type="radio" value={plans.pro.title} id="pro"/>
                <PlanLable htmlFor='pro'>
                    <LogoContainer>
                      <Logo src={proLogo}/>
                    </LogoContainer>
                    <PlanTextWrapper>
                      <SubHeading darkText={darkText}>{plans.pro.title}</SubHeading>
                      <PriceText>${yearPlan ? plans.pro.price.yearly : plans.pro.price.monthly}/yr</PriceText>
                      {yearPlan && <ExtraText>2 months free</ExtraText> }

                    </PlanTextWrapper>
                </PlanLable>

                </PlanFormContainer>

                  <YearPlanTogglerContainer>
                    <TogglerText toggleColor={!yearPlan}>{togglerMonth}</TogglerText>
                        <YearPlanTogglerLabel>
                              <YearPlanTogglerInput name="YearPlan" type='checkbox'
                                 onChange={e => {
                                   setValue('yearPlan', !!e.target.checked)
                                   setYearPlan(!yearPlan)
                                 }}
                               />
                              <YearPlanTogglerSpan />
                        </YearPlanTogglerLabel>
                    <TogglerText toggleColor={yearPlan}>{togglerYear}</TogglerText>
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
