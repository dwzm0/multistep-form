/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import Step from './Step'
import { AsideBar, StepContainer } from './SideBar.elements'
import { useAppState } from '../../state'

interface Props {
  firstStepText: string
  secondStepText: string
  thirdStepText: string
  fourthStepText: string
}

export const SideBar = ({ firstStepText, secondStepText, thirdStepText, fourthStepText }: Props): JSX.Element => {
  const [state] = useAppState()

  return (
    <>
      <AsideBar>
        <StepContainer>
            <Step stepText={firstStepText} stepNum={1} step={state.step}/>
            <Step stepText={secondStepText} stepNum={2} step={state.step}/>
            <Step stepText={thirdStepText} stepNum={3} step={state.step}/>
            <Step stepText={fourthStepText} stepNum={4} step={state.step}/>
        </StepContainer>
      </AsideBar>
    </>
  )
}

export default SideBar
