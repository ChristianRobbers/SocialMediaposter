import React from 'react'
import styled from 'styled-components'

//Pictures
import SearchIcon from '../assets/searchicon.png'

const Searchbar = ({SetterProperty}) => {

  return (
    <>
        <SearchbarContainer>
                <SearchInput Icon={SearchIcon} type="text" placeholder='Søg efter en ejendom...' onChange={(e) => SetterProperty(e.target.value)}/>
        </SearchbarContainer>
    </>
  )
}

//styles

const SearchbarContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchInput = styled.input`
    width: 75%;
    height: 35px;
    border-radius: 20px;
    padding-left: 50px;
    border: none;
    background: #ffff no-repeat 15px url(${(props) => props.Icon});
    background-size: 25px 25px;
    

    :focus {
    outline: none ;
    }

`



export default Searchbar