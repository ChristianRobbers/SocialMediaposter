import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

//Custom hook localstorage
import useLocalStorage from '../hooks/Uselocalstorage'

//Pictures
import Logo from '../assets/logo.png'
import Avatar from '../assets/kim.jpg'

const Navbar = () => {

    //Gets the name stored in the users local storage and sets it
    const [namefromlocalstorage, setNameFromLocalStorage] = useLocalStorage('loginname', '')

  return (
    <Header>
        <img className='logo' src={Logo} alt="Logo" />
        <Link to={'/minside'}>
            <div className='loggedInAccount'>
                <img className='avatar' src={Avatar} alt='Avatar'/>
                <p>{namefromlocalstorage}</p>
            </div>
        </Link>
    </Header>
  )
}

//styles

const Header = styled.header`

width: 100%;
height: 5vh;
background-color: #ffff;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 15px 0px 15px;

.loggedInAccount {
    display: flex;
    align-items: center;
}

.logo {
    width: 83px;
    height: 18px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}

a {
  text-decoration: none;
  color: black;
}
`

export default Navbar