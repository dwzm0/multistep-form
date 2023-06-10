import React from 'react'
import { Text, Heading, Section, TextWrapper } from '../../globalStyle'
import { ThirdFormChoiceContainer, ThirdFormChoice, CheckLabel, CheckSpan, CheckInput, AddonSubheading, AddonText } from './FormThird.elements'

interface FormThirdPropsInt {
  headerText: string
  subText: string
  firstAddonSubHeading: string
  firstAddonText: string
  secondAddonSubHeading: string
  secondAddonText: string
  thirdAddonSubheading: string
  thirdAddonText: string

}

const FormThird = ({ headerText, subText, thirdAddonSubheading, thirdAddonText, firstAddonSubHeading, firstAddonText, secondAddonSubHeading, secondAddonText }: FormThirdPropsInt): JSX.Element => {
  return (
    <>
        <Section>
            <Heading>{headerText}</Heading>
            <Text>{subText}</Text>
            <ThirdFormChoiceContainer>

                <ThirdFormChoice>
                    <CheckLabel>
                        <CheckInput type='checkbox' />
                        <CheckSpan />
                    </CheckLabel>
                    <TextWrapper>
                        <AddonSubheading darkText={true}>{firstAddonSubHeading}</AddonSubheading>
                        <AddonText>{firstAddonText}</AddonText>
                    </TextWrapper>
                </ThirdFormChoice>
                <ThirdFormChoice>
                    <CheckLabel>
                        <CheckInput type='checkbox' />
                        <CheckSpan />
                    </CheckLabel>
                    <TextWrapper>
                        <AddonSubheading darkText={true}>{secondAddonSubHeading}</AddonSubheading>
                        <AddonText>{secondAddonText}</AddonText>
                    </TextWrapper>
                </ThirdFormChoice>
                <ThirdFormChoice>
                    <CheckLabel>
                        <CheckInput type='checkbox' />
                        <CheckSpan />
                    </CheckLabel>
                        <TextWrapper>
                            <AddonSubheading darkText={true}>{thirdAddonSubheading}</AddonSubheading>
                            <AddonText>{thirdAddonText}</AddonText>
                        </TextWrapper>
                </ThirdFormChoice>

            </ThirdFormChoiceContainer>
        </Section>
    </>
  )
}

export default FormThird
