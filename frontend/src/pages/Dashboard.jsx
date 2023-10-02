import React from 'react'
import styled from 'styled-components'

// Custom hook import
import useLocalStorage from '../hooks/Uselocalstorage';

//components
import Navbar from '../components/Navbar'
import SideMenu from '../components/Sidemenu'

const Dashboard = () => {

  const [namefromlocalstorage, setNameFromLocalStorage] = useLocalStorage('loginname', '')

  return (
    <>
      <header>
        <Navbar />
      </header>

      <MainContainer>
        <SideMenu />
        <div className='content'>
          <h1>Velkommen</h1>
          <p>{namefromlocalstorage}</p>
        </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
}

h1 {
  margin-top: 50px;
  font-size: 65px;
}

p {
  margin-top: 20px;
  font-size: 45px;
}
`

export default Dashboard