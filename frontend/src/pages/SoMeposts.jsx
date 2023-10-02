import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

//components
import Navbar from '../components/Navbar'
import SideMenu from '../components/Sidemenu'
import Searchbar from '../components/Searchbar'
import Propertycard from '../components/Propertycard'
import Spinner from '../components/Spinner'

const SoMeposts = () => {

    //Search filter
    const [filter, setFilter] = useState([])

    //data from webscrape api
    const [data, setData] = useState([]);

    //data from local storage. TODO when i figure out how to compare it right
    // const [localdata, setLocaldata] = useLocalStorage('data', '')

    //Sets the state of the spinner while wating for data to be populated
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
        await axios.get("http://localhost:8000/api/scraper").then((res) => {
          setData(res.data.result[0])
          setLoading(false)
        });
      }
      getData();
    }, []);

  return (
    
    <>
        <header>
            <Navbar />
        </header>

        <MainContainer>

            <SideMenu />

            <div className='content'>
                <Searchbar SetterProperty={setFilter} />

            {loading === true ? <Spinner /> :
                <ResultContainer>
                    
                    {data.filter(value => value.title.toLowerCase().includes(filter)).map((value, key) => {
                        return ( 
                        <Link to={`/property/${key}`} state={{img: value.img, link: value.link}} key={key}>
                            <Propertycard img={value.img} adress={value.title} postalcode={value.postalCode} city={value.city} />
                        </Link>
                        )
                    })}

                </ResultContainer>
            }
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
    overflow-y: scroll;
}

.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
}

a {
    text-decoration: none;
    color: black;
}
`
const ResultContainer = styled.div`
    width: 100%;
    height: 85vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, 325px);
    justify-content: space-evenly;
    grid-gap: 90px;
    padding: 55px;
`

export default SoMeposts