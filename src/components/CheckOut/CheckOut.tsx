/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { FormWrapper, FlexRow, MainContainer, SubHeading, Text, Heading, StyledSection, TextWrapper, Footer, ForwardButton, BackButton } from '../../globalStyle'
import { StyledHr, ChoosenPlanWrapper, CheckOutConfirmForm, ChoosenPlan, ChoosenPlanContainer, SumContainer, FinalSumText, SmText } from './CheckOut.elements'

import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useAppState } from '../../state'

interface formFinalPropsInt {
  finalHeading: string
  finalText: string
}

const CheckOut = ({ finalHeading, finalText }: formFinalPropsInt): JSX.Element => {
  const [state] = useAppState()
  const { handleSubmit } = useForm({ defaultValues: state })
  const navigate = useNavigate()

  const parsedAddons = (state.plan_addon) ? state.plan_addon.map((addon: any) => JSON.parse(addon)) : 0

  const getTotal = (): number => {
    let sum
    if (parsedAddons === 0) {
      sum = state.yearPlan ? state.price.yearly : state.price.monthly
    } else {
      sum = state.yearPlan
        ? state.price.yearly + parsedAddons.reduce((acc: any, curr: any) => acc + Number(curr.price.yearly), 0)
        : state.price.monthly + parsedAddons.reduce((acc: any, curr: any) => acc + Number(curr.price.monthly), 0)
    }
    return sum
  }

  const saveData = (data: any): any => {
    console.log(data)
    navigate('/final')
  }
  return (
    <>
      <MainContainer>
          <StyledSection>

              <TextWrapper>
                <Heading>{finalHeading}</Heading>
                <Text>{finalText}</Text>
              </TextWrapper>

              <CheckOutConfirmForm onSubmit={handleSubmit(saveData)}>
                <FormWrapper>
                  <ChoosenPlanContainer>
                    <FlexRow>

                      <ChoosenPlanWrapper>
                        <ChoosenPlan>
                          <SubHeading darkText={true}>{state.plan_option}</SubHeading>
                          <Link to='/addons'><Text>Change</Text></Link>
                        </ChoosenPlan>
                      </ChoosenPlanWrapper>
                      <SubHeading darkText={true}>${state.yearPlan ? state.price.yearly : state.price.monthly}/yr</SubHeading>

                    </FlexRow>

                    <StyledHr />

                      {parsedAddons !== 0
                        ? parsedAddons.map((addon: any) => {
                          return (
                        <>
                        <FlexRow>
                          <SmText>{addon.title}</SmText>
                          <SmText>+${state.yearPlan ? `${addon.price.yearly}` + '/mo' : `${addon.price.monthly}` + '/mo'}</SmText>
                        </FlexRow>
                        </>
                          )
                        })
                        : null }
                     </ChoosenPlanContainer>
                       <SumContainer>
                          <Text>Total(per year)</Text>
                          <FinalSumText>${getTotal()}/yr</FinalSumText>
                      </SumContainer>
                    </FormWrapper>

                  <Footer>
                      <Link to='/addons'>
                        <BackButton>Go Back</BackButton>
                      </Link>
                        <ForwardButton>Confirm</ForwardButton>
                  </Footer>

              </CheckOutConfirmForm>

          </StyledSection>
      </MainContainer>
    </>
  )
}

export default CheckOut
