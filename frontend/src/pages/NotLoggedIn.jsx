import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const NotLoggedIn = () => {
  return (
    <TempDiv>
        <p>Du er ikke logged in klik på knappen for at gå til login siden</p>
        <Link to={'/'}><button>Gå til login siden</button></Link>
    </TempDiv>
  )
}

//Styles

const TempDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;

p {
    font-size: 45px;
    margin-bottom: 25px;
    
}

button {
    border: none;
    background-color: orange;
    height: 55px;
    width: 150px;
    color: white;
    border-radius: 15px;
    cursor: pointer;
}


`

export default NotLoggedIn