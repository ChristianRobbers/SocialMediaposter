import React from 'react'
import styled from 'styled-components'
import {useLocation } from 'react-router-dom'

//components
import Navbar from '../components/Navbar'
import SideMenu from '../components/Sidemenu'
import SomeCreator from '../components/Somecreator'

const Selectedproperty = () => {
  
  //passing data via state from LINK in SoMeposts.jsx
  const stateImg = useLocation().state.img
  
  //passing data via state from LINK in SoMeposts.jsx
  const stateLink = useLocation().state.link
 
  return (
    <>
        <Navbar />

        <MainContainer>

            <SideMenu />
       
            <SomeCreator propertyimg={stateImg} propertylink={stateLink} />
           
            
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
`

export default Selectedproperty