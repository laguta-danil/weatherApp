import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CurrentWeather = ({description, city, country, error, temperature, feels_like}) => {
    const celsius = Math.round(temperature - 273.15)
    const feeling = Math.round(feels_like - 273.15)
    


    return (
    
        <Card style={{width:'24rem'}} border='dark' className='m-2'>
            <Card.Img src='https://www.1zoom.ru/big2/64/232791-Sepik.jpg'/>
            <div>{city  && <h2>{city}</h2>}</div>
            <div>{temperature && <h2>{( celsius > 0 ? '+' + celsius : celsius )} °C </h2>}</div>
            <div>{feels_like && <p>Feels like : {(feeling > 0 ? '+' + feeling : feeling)}</p>}</div>
            <div>{description && <p>Сloudy : {description}</p>}</div>
            {/* {error && <p>{error}</p>} */}
            <span>
            <Button style={{width:'12rem'}} variant='dark' className='m-1' >Delete</Button>
            <Button style={{width:'11rem'}} variant='danger' >Renew</Button>
            </span>
        </Card>
        
    )
}

export default CurrentWeather;  