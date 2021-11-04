import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { WeatherSlice } from '../redux/reducers/weatherReducer'
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks/reduxHooks'

const CurrentWeather = ({ description, city, temperature, feels_like, id }) => {
    const celsius = Math.round(temperature - 273.15)
    const feeling = Math.round(feels_like - 273.15)

    const { citiesData } = useAppSelector(state => state.weatherReducer)
    const dispatch = useAppDispatch();
    const { handleDeleteData } = WeatherSlice.actions

    const handleDelete = () => {
        const newCitiesData = citiesData.filter(element => element.id !== id
        )
        const changeData = dispatch(handleDeleteData(newCitiesData))
        
        localStorage.setItem('cities', JSON.stringify(changeData.payload))
        return changeData
    }


    return (

        <Card>
            <Card.Img src='https://www.1zoom.ru/big2/64/232791-Sepik.jpg' />
            <Card.Header>{city && <h2>{city}</h2>}</Card.Header>
            <Card.Body>
                <div>{temperature && <h2>{(celsius > 0 ? '+' + celsius : celsius)} °C </h2>}</div>
                <div>{feels_like && <p>Feels like : {(feeling > 0 ? '+' + feeling : feeling)}</p>}</div>
                <div>{description && <p>Сloudy : {description}</p>}</div>
                <div>{id && <p> id : {id} </p>}</div>
            </Card.Body>
            <span>
                <Button onClick={() => handleDelete()} style={{ width: '10rem' }} variant='dark' className='m-1' >Delete</Button>
                <Button style={{ width: '10rem' }} variant='danger' >Renew</Button>
            </span>
        </Card>

    )
}

export default CurrentWeather;      