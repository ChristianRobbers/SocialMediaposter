import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

//components
import Navbar from '../components/Navbar'
import SideMenu from '../components/Sidemenu'

const MyPage = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [company, setCompany] = useState('')
    const [store, setStore] = useState('')
    const [role, setRole] = useState('')

//Config for axios post
const configuration = {
    method: 'post',
    url: "http://localhost:8000/user/register",
    data: {
        name,
        email,
        password,
        company,
        store,
        role
    },
  }

const handleSubmit = (e) => {
    e.preventDefault();

    axios(configuration)
    .then((result) => { 
        console.log('User created')
        console.log(result)
        alert('User created')
    })
    .catch((error) => {
      error = new Error()
    })
}

  return (
    <>
    <header>
      <Navbar />
    </header>

    <MainContainer>
      <SideMenu />
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Registrer bruger</h1>
            <p>Navn</p>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <p>Email</p>
            <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <p>Password</p>
            <input type="text" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <p>Virksomhed</p>
            <input type="text" name="company" id="company" value={company} onChange={(e) => setCompany(e.target.value)} />

            <p>Butik</p>
            <input type="text" name="store" id="store" value={store} onChange={(e) => setStore(e.target.value)} />

            <p>Rolle</p>
            <input type="text" name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)} />

            <button onClick={(e) => handleSubmit(e)}>Registrer bruger</button>
        </form>
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

form {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        margin-bottom: 30px;
    }
    button {
        width: 175px;
        height: 35px;
        margin-top: 20px;
        border: none;
        color: white;
        background-color: orange;
    }
}
`

export default MyPage