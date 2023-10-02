import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

//components
import Navbar from '../components/Navbar'
import SideMenu from '../components/Sidemenu'


const Standardtext = () => {

  const [testdata, setTestData] = useState('test')

  const getData = async () => {
    await axios.get("http://localhost:5000/api/scraper/test", {headers: {testdata: 'frontend'}}).then((res) => {
      console.log(res.config.params)
    });
  }

  return (
    <>
      <header>
        <Navbar />
      </header>

      <MainContainer>
        <SideMenu />
        <div className='content'>
          <button onClick={() => getData()}>Button</button>
          <div>{testdata}</div>
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
}
`

export default Standardtext