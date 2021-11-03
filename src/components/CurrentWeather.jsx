import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CurrentWeather = ({ description, city, temperature, feels_like }) => {
    const celsius = Math.round(temperature - 273.15)
    const feeling = Math.round(feels_like - 273.15)


    return (

        <div>
            <Card.Img src='https://www.1zoom.ru/big2/64/232791-Sepik.jpg' />
            <Card.Header>{city && <h2>{city}</h2>}</Card.Header>
            <Card.Body>
            <div>{temperature && <h2>{(celsius > 0 ? '+' + celsius : celsius)} °C </h2>}</div>
            <div>{feels_like && <p>Feels like : {(feeling > 0 ? '+' + feeling : feeling)}</p>}</div>
            <div>{description && <p>Сloudy : {description}</p>}</div>
            </Card.Body>
            <span>
                <Button style={{ width: '12rem' }} variant='dark' className='m-1' >Delete</Button>
                <Button style={{ width: '11rem' }} variant='danger' >Renew</Button>
            </span>
        </div>

    )
}

export default CurrentWeather;      