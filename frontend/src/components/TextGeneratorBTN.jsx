import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

//components import
import Spinner from '../components/Spinner'

//importing openai API for text generation
const {Configuration, OpenAIApi} = require("openai")


const TextGeneratorBTN = ({setApiText, getpropertylink}) => {

    //Sets the state of the spinner while wating for data to be populated
    const [loading, setLoading] = useState(false)

    //Sets the input from API in GenerateText()
    const [input, setInput] = useState("")

    //Sets info about the property, link and number to realestate agent
    const [info, setInfo] = useState("")

    // Generates text from input, with the openai API
    const GenerateText = async () => {
      const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);
    
      try {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: `Kan du omskrive følgende tekst ${input} til et facebook opsalg på maks 150 ord. Du skal indsætte emojis for enden af teksten`}],
        });
        
        setApiText(`${completion.data.choices[0].message.content.trim()}\n\n${info.trim()}`)
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    //Goes to api getting data from there and setting the selected property in the headers so that the backend can work with the link
    const getDataAndGenerateText = async () => {
      setLoading(true)
      await axios.get("http://localhost:8000/api/scraper/property", {headers: {propertyurl: getpropertylink }}).then((res) => {
        setInput(res.data.result[0][0].text)
        setInfo(`\nSe ejendommen her: ${getpropertylink} 🌍 \n\nRing og bestil en fremvisning på: 51 84 10 25 ☎️`)
      });
    } 

    useEffect(() => {
      if (input !== "" && info !=="") {
        GenerateText();
      }
    }, [input, info]);



  return (
    <>
        <GenerateTextButton onClick={getDataAndGenerateText}>Generer Automatisk Tekst {loading === true ? <Spinner className='spinner'></Spinner> : <span></span>} </GenerateTextButton>
    </>
  )
}

//styles
const GenerateTextButton = styled.button`

display: flex;
justify-content: center;
align-items: center;
width: 300px;
height: 55px;
color: #fff;
background-color: #247BA0;
border-radius: 20px;
border: none;
cursor: pointer;

.spinner {
  margin-left: 15px;
 
  img {
    height: 30px;
    width: 30px;
  }
}
`

export default TextGeneratorBTN