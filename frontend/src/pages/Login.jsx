import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";

// Custom hook import
import useLocalStorage from '../hooks/Uselocalstorage';

//Pictures
import loginBg from '../assets/loginbg.png'
import person from '../assets/kim.jpg'
import account from '../assets/account.png'
import padlock from '../assets/padlock.png'


const Login = () => {

  //Calling the cookie libary for storing cookies in the browser
  const cookies = new Cookies();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // set the login name in the users localstorage for use different placeses in the app
  const [name, setName] = useLocalStorage('loginname', '')

  //Config for axios post
  const configuration = {
    method: 'post',
    url: "http://localhost:8000/user/login",
    data: {
      email,
      password
    },
  }

  //Handles the login submit from the form and the button
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios(configuration)
    .then((result) => {
      cookies.set(
        'TOKEN', result.data.token, {
          path: '/'
        })
        setName(result.data.name)
        window.location.href = '/dashboard'
        })
    .catch((error) => {
      error = new Error()
    })

  }
  
  return (
    <MainContainer>
      <LoginForm onSubmit={(e) => handleSubmit(e)}>
          <img src={person} alt="something" />
          <Text fontsize={'1.4em'} >{name ? `Velkommen ${name}` : 'Velkommen'}</Text>
          <UserInput backgroundimg={account} type='email' name='email' placeholder={'Username'} value={email} onChange={(e) => setEmail(e.target.value)}></UserInput>
          <UserInput backgroundimg={padlock} type='password' name='password' placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)}></UserInput>
          <Link to={'/dashboard'}><button type='submit' onClick={(e) => handleSubmit(e)}>Login</button></Link>
          <Text>Glemt Kode eller Brugernavn?</Text>
      </LoginForm>
    </MainContainer>
  )

  
}

//Styles

const MainContainer = styled.main`
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${loginBg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoginForm = styled.form`
    width: auto;
    height: 32em;
    display: flex;
    flex-direction: column ;
    justify-content: space-evenly;
    align-items: center;
    
    img {
      width: 13em;
      height: 13em;
      border-radius: 50%;
    }

    button {
      width: 25em;
      height: 2.3em;
      border-radius: 5em;
      cursor: pointer;
      border: none;
      background-color: #FCA311;
      color: #ffff;
    }
`

const Text = styled.p`
    color: #ffff;
    font-size: ${(props) => props.fontsize};
`

const UserInput = styled.input`
    width: 25em;
    height: 2.3em;
    border-radius: 5em;
    border: none;
    background: #ffff no-repeat 1em url(${(props) => props.backgroundimg});
    padding-left: 3em;

    :focus {
      outline: none ;
    }

`


export default Login
