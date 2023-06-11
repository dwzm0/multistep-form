import React from 'react'
import { Heading, Text } from '../../globalStyle'
import { StyledSectionFinal, Img, TextWrapperFinal } from './Final.elements'

interface finalPropsInt {
  finalImg: string
  finalHeader: string
  finalText: string
}

const Final = ({ finalImg, finalHeader, finalText }: finalPropsInt): JSX.Element => {
  return (
    <>
       <StyledSectionFinal>
          <Img src={finalImg}/>
          <TextWrapperFinal style={{ alignItems: 'center', textAlign: 'center' }}>
             <Heading >{finalHeader}</Heading>
             <Text>{finalText}</Text>
          </TextWrapperFinal>
       </StyledSectionFinal>
    </>
  )
}

export default Final
