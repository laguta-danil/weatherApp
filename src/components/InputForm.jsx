
import React, { useEffect } from 'react'
import { Button, CardGroup } from 'react-bootstrap'
import { fetchWeather, getWeatherLocal} from '../redux/reducers/actionCreactor'
import { WeatherSlice } from '../redux/reducers/weatherReducer'
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks/reduxHooks'
import CurrentWeather from './CurrentWeather'
import './inputStyle.css'


const InputForm = (props) => {

    const { changer, localStoreCities } = WeatherSlice.actions
    const dispatch = useAppDispatch()
    const { getWeather, text, citiesData } = useAppSelector(state => state.weatherReducer)

    const callbackText = (e) => {
        dispatch(changer(e.target.value))
    }

    useEffect (() => {
        const localData = localStorage.getItem('cities')
        const cities = localData ? JSON.parse(localData) : []
        dispatch(localStoreCities(cities))
        dispatch(getWeatherLocal(cities))
    }, [])

    const addCard = (e) => {
        e.preventDefault()
        dispatch(fetchWeather({city: text, cities: citiesData}))
        
    }

    const weatherList = citiesData.map((arr) => <CurrentWeather
        city={arr.name}
        description={arr.description}
        temperature={arr.temperature}
        feels_like={arr.feels_like}
        id={arr.id}
    />)
    


    return (
        <form onSubmit={props.data}>
            <input
                onChange={callbackText}
                value={text}
                type='text'
                placeholder='city'
                name='city'
            />
            <h1>{text}</h1>
            <Button onClick={addCard} >ADd</Button>
            <CardGroup border='dark' className='p-6'>
                {weatherList}
            </CardGroup>

        </form>
    )
}

export default InputForm;