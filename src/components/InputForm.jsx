
import React, { useEffect } from 'react'
import { CardGroup } from 'react-bootstrap'
import { fetchWeather} from '../redux/reducers/actionCreactor'
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
    }, [])

    // const checker = textBlock.forEach((elem) => {
    //         if (elem.id !== getWeather.id) {
    //             dispatch(getWeatherData(getWeather))
    //         } else {
    //             dispatch(getWeatherData('moskow'))
    //         }
    //     })


    const addCard = (e) => {
        e.preventDefault()
        dispatch(fetchWeather({city: text, cities: citiesData}))
        
    }

    const addCardToBlock = (e) => {
        // e.preventDefault()
        // dispatch(getWeatherData(getWeather))
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
            <button onClick={addCard} >add</button>
            {/* <button onSubmit={() => dispatch(fetchWeather(city))}>Submit</button> */}
            {/* {getWeather.name} {getWeather.main.temp}  */}
            <button onClick={addCardToBlock}> mapping</button>
            {JSON.stringify(getWeather)}
            <CardGroup border='dark' className='p-6'>
                {weatherList}
            </CardGroup>

        </form>
    )
}

export default InputForm;