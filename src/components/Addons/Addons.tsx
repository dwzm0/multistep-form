import React from 'react'
import { MainContainer, Text, Heading, StyledSection, TextWrapper, Footer, ForwardButton, BackButton } from '../../globalStyle'
import { ThirdFormChoiceContainer, ThirdFormChoice, CheckLabel, CheckSpan, CheckInput, AddonSubheading, AddonText } from './Addons.elements'

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

const Addons = ({ headerText, subText, thirdAddonSubheading, thirdAddonText, firstAddonSubHeading, firstAddonText, secondAddonSubHeading, secondAddonText }: FormThirdPropsInt): JSX.Element => {
  return (
    <>
      <MainContainer>
        <StyledSection>
            <TextWrapper>
                <Heading>{headerText}</Heading>
                <Text>{subText}</Text>
            </TextWrapper>
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

            <Footer>
                <BackButton>Go Back</BackButton>
                <ForwardButton>Next Step</ForwardButton>
            </Footer>
        </StyledSection>
      </MainContainer>
    </>
  )
}

export default Addons