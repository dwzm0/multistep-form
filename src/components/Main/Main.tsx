import React from 'react'
/* import { useForm } from 'react-hook-form' */
import { MainContainer } from './Main.elements'
import SideBar from '../SideBar/SideBar'
import { sideBarProps } from '../SideBar/SideBarProps'
import { formSecondProps } from '../FormSecond/FormSecondProps'
/* import FormFirst from '../FormFirst/FormFirst'
 */import FormSecond from '../FormSecond/FormSecond'

const Main = (): JSX.Element => {
  return (
    <>
     <MainContainer>
        < SideBar {...sideBarProps}/>
        <FormSecond {...formSecondProps}/>
     </MainContainer>
    </>

  )
}

export default Main
