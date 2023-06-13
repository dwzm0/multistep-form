import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './state'
import GlobalStyle, { GeneralContainer, PanelContainer } from './globalStyle'
import { SideBar, Contact, Plan, Addons, CheckOut, Final, addonsProps, checkOutProps, sideBarProps, planProps, finalProps, contactProps } from './components'

const App = (): JSX.Element => {
  return (
    <>
    <GlobalStyle />
      <GeneralContainer>
        <PanelContainer>
          <AppProvider>
            <Router>
              <SideBar {...sideBarProps}/>
               <Routes>
                  <Route path='/' element={<Contact {...contactProps}/>} />
                  <Route path='/plan' element={<Plan {...planProps} />} />
                  <Route path='/addons' element={<Addons {...addonsProps} />} />
                  <Route path='/checkout' element={<CheckOut {...checkOutProps} />} />
                  <Route path='/final' element={<Final {...finalProps} />} />
               </Routes>
            </Router>
          </AppProvider>
        </PanelContainer>
      </GeneralContainer>
    </>
  )
}

export default App
