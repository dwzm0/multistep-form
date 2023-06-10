import React from 'react'
import { SubHeading, Text, Heading, Section } from '../../globalStyle'
import { FinalFormContainer, ChoosenPlanContainer, SumContainer, FinalSumText } from './FormFinal.elements'

interface formFinalPropsInt {
  finalHeading: string
  finalText: string
}

const FormFinal = ({ finalHeading, finalText }: formFinalPropsInt): JSX.Element => {
  return (
    <>
      <Section>
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
      </Section>
    </>
  )
}

export default FormFinal
