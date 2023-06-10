import React from 'react'
import { useResize } from '../../hooks/index'
import { SubHeading, Text, Heading, GeneralFormContainer } from '../../globalStyle'
import ButtonsComponent from '../ButtonsComponent'
import { FinalFormContainer, ChoosenPlanContainer, SumContainer, FinalSumText } from './FormFinal.elements'
import ButtonsMobileComponent from '../ButtonsMobileComponent'

interface formFinalPropsInt {
  finalHeading: string
  finalText: string
}

const FormFinal = ({ finalHeading, finalText }: formFinalPropsInt): JSX.Element => {
  const showSmallBg = useResize()

  return (
    <>
      <GeneralFormContainer>
          <Heading>{finalHeading}</Heading>
          <Text>{finalText}</Text>
          <FinalFormContainer>
            <ChoosenPlanContainer>
                 <SubHeading darkText={true}>Arcade (Yearly)</SubHeading>
                 <Text>Change</Text>
            </ChoosenPlanContainer>
            <SubHeading darkText={true}>$90/yr</SubHeading>
          </FinalFormContainer>
          <SumContainer>
             <Text>Total(per year)</Text>
             <FinalSumText>$120/yr</FinalSumText>
          </SumContainer>
          {!showSmallBg ? <ButtonsComponent/> : <ButtonsMobileComponent/>}
      </GeneralFormContainer>
    </>
  )
}

export default FormFinal
