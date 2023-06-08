import React from 'react'
import { MainContainer } from './Main.elements'
import SideBar from '../SideBar/SideBar'
import { sideBarProps } from '../SideBar/SideBarProps'
/* import { formSecondProps } from '../FormSecond/FormSecondProps'
/*  import FormFirst from '../FormFirst/FormFirst'
/* import FormSecond from '../FormSecond/FormSecond' */
import FormThird from '../FormThird/FormThird'
import { formThirdProps } from '../FormThird/FormThirdProps'

const Main = (): JSX.Element => {
  return (
    <>
     <MainContainer>
        < SideBar {...sideBarProps}/>
        <FormThird {...formThirdProps}/>
        {/* <FormFirst /> */}
      {/*   <FormSecond {...formSecondProps}/> */}
     </MainContainer>
    </>

  )
}

export default Main
