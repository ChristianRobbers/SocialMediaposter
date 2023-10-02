import React from 'react'
import styled from 'styled-components'

const Propertycard = ({img, adress, postalcode, city}) => {
  return (
    <>
        <PropertyCard>
            <img src={img} alt={adress} />
                <div>
                    <p> {adress} </p>
                    <p> {postalcode} {city} </p>
                </div>
        </PropertyCard>
    </>
  )
}

//styles

const PropertyCard = styled.div`
    height: 280px;
    border-radius: 20px;
    color: white;
    display: flex;
    flex-direction: column;

    img {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    div {
        background-color: #ffff;
        height: 100%;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        padding-top: 5px;
    }

    p {
        color: black;
        text-align: center;
        padding: 3px;
    }
`

export default Propertycard