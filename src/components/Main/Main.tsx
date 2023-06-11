import React from 'react'
import { MainContainer } from './Main.elements'
/* import FormFirst from '../FormFirst/FormFirst'
 *//* import FormSecond from '../FormSecond/FormSecond'
import { formSecondProps } from '../FormSecond/FormSecondProps'
 */
import FormThird from '../FormThird/FormThird'
import { formThirdProps } from '../FormThird/FormThirdProps'
const Main = (): JSX.Element => {
  return (
    <>
      <MainContainer>
        <FormThird {...formThirdProps}/>
      </MainContainer>
    </>
  )
}

export default Main
