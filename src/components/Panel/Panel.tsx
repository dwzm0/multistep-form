import React from 'react'
import { PanelContainer } from './Panel.elements'
import SideBar from '../SideBar/SideBar'
import Main from '../Main/Main'
import { sideBarProps } from '../SideBar/SideBarProps'

const Panel = (): JSX.Element => {
  return (
    <>
     <PanelContainer>
        < SideBar {...sideBarProps}/>
        <Main />
     </PanelContainer>
    </>

  )
}

export default Panel
