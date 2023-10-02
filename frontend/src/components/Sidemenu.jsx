import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

//Pictures
import dashboard from '../assets/dashboard.png'
import somepost from '../assets/somepost.png'
import descriptions from '../assets/descriptions.png'
import standardtext from '../assets/standardtext.png'
import support from '../assets/support.png'

const SideMenu = () => {
  return (
    <Menu>
      <ul className='list'>
        <Link to={'/dashboard'}><li> <img src={dashboard} alt='dashboard icon'/> Forside </li></Link>
        <Link to={'/someopslag'}><li> <img src={somepost} alt='someposter icon'/> SoMe Opslag </li></Link>
        <Link to={'/beskrivelser'}><li> <img src={descriptions} alt='descriptions icon'/> Beskrivelser </li></Link>
        <Link to={'/standardtekster'}><li> <img src={standardtext} alt='standardtext icon'/> Byg Standard Tekster</li></Link>
        <Link to={'/support'}><li> <img src={support} alt='support icon'/> Support </li></Link>
      </ul>
    </Menu>
  )
}

//styles

const Menu = styled.section`

width: 300px;
height: 100%;
background-color: #ffff;
display: flex;

.list {
  display: flex;
  flex-direction: column;
  width: 100%;

   li {
    display: flex;
    align-items: center;
    list-style: none;
    width: 100%;
    padding: 20px 0px 20px 20px;
   }

   img {
    height: 30px;
    width: 33px;
    margin-right: 25px;
   }
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  background-color: #ABCBEB;
}


`

export default SideMenu