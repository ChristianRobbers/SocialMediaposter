import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

//components
import TextGeneratorBTN from './TextGeneratorBTN'

//pictures
import RealMaegler from '../assets/MockDataPics/realmaegler.png'
import Fbicon from '../assets/fbicon.png'
import Instaicon from '../assets/instaicon.png'

//hooks localstorage
import useLocalStorage from '../hooks/Uselocalstorage'

const Somecreator = ({propertyimg, propertylink}) => {

    //local storage for the text input 
    const [text, setText] = useLocalStorage('value', '')

    //sets the size for input and output depending on facebook and instagram button click
    const [size, setSize] = useState('680px')

  return (

    <SoMeCreatorContainer>
        
        

        <div className='socialmedia-view-container'>
            <img src={Fbicon} alt="facebook icon" className='notactive' onClick={ () => setSize('680px')}/>
            <img src={Instaicon} alt="instagram icon" className='notactive' onClick={ () => setSize('472px')}/>
        </div>


        <div className='socialmedia-editor-container'>
            <div className='socialmedia-editor-input-container'>
                <HeaderTextEditor className='header-texteditor' size={size}>
                    <p>Tekst Boks</p>
                </HeaderTextEditor>

                <TextInput name="propertyeditor" id="propertyeditor" size={size} rows="25" type='text' value={text} placeholder='Skriv og rediger din tekst her eller brug en af knapperne til højre....' onChange={(e) => setText(e.target.value)}/>
            </div>

            <TextGeneratorBTN setApiText={setText} getpropertylink={propertylink}></TextGeneratorBTN>
        </div>
        
        
        <SoMeCreatorOutput size={size}>
            <div className='header-output'>
                <img src={RealMaegler} alt="logo" />
                <p>Realmæglerne Køge</p>
            </div>

            <TextInput name="propertytextshower" id="propertytextshower" size={size} rows="14" type='text' value={text} placeholder='Din tekst bliver vist her....' readOnly={true}/>

            <div className='output-img'>
                    <img src={propertyimg} alt="test" />
            </div>
        </SoMeCreatorOutput>

    </SoMeCreatorContainer>

    
  )
}

//styles

const SoMeCreatorContainer = styled.div`

    padding: 25px;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

    .socialmedia-view-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 45px;
            height: 45px;
            margin: 15px;
            cursor: pointer;
        }
    }

    .socialmedia-editor-container {
        display: flex;
        align-items: center;
        
        .socialmedia-editor-input-container {
            margin: 20px;
        }
    }

`

const HeaderTextEditor = styled.div` 
    height: 50px;
    width: ${(props) => props.size};
    background-color: #ffff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(112, 112, 112, 0.3);
`

const TextInput = styled.textarea `
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: none;
    padding: 15px;
    resize: none;
    width: ${(props) => props.size};

    :focus {
        outline: none;
    }
`

const SoMeCreatorOutput = styled.div`
    height: auto;
    width: ${(props) => props.size};
    border-radius: 15px;
    background-color: #ffff;
    margin-top: 25px;

    .header-output {
        width: 100%;
        height: 48px;
        border-radius: 15px;
        padding: 12px 16px 0px;
        margin: 0px 0px 12px;
        display: flex;
        align-items: center;

        img {
            border-radius: 50%;
            height: 40px;
            width: 40px;
            margin-right: 8px;
        }
    }

    .output-box {
        padding: 4px 16px 16px;
        height: 106px;
    }

    .output-img {
        width: 100%;
        
        img {
            width: 100%;
            height: 355px;
            padding: 10px;
        }
    }


`

export default Somecreator