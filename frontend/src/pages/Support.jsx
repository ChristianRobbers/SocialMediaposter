import React from 'react'
import styled from 'styled-components'

//components
import Navbar from '../components/Navbar'
import SideMenu from '../components/Sidemenu'

const Support = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <MainContainer>
        <SideMenu />
        <div className='content'>SUPPORT</div>
      </MainContainer>
    </>
  )
}

//styles

const MainContainer = styled.main`
width: 100%;
height: 95vh;
background-color: #E5E5E5;
display: flex;

.content {
  height: 100%;
  width: 100%;
}
`

export default Support