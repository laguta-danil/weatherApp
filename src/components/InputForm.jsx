
import React from 'react'
import { Card } from 'react-bootstrap'
import { fetchWeather, getWeatherData } from '../redux/reducers/actionCreactor'
import { WeatherSlice } from '../redux/reducers/weatherReducer'
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks/reduxHooks'
import CurrentWeather from './CurrentWeather'
import './inputStyle.css'



const InputForm = (props) => {

    const { changer } = WeatherSlice.actions
    const dispatch = useAppDispatch()
    const { getWeather, text, textBlock } = useAppSelector(state => state.weatherReducer)

    const callbackText = (e) => {
        dispatch(changer(e.target.value))
    }


    const addCard = () => {
        dispatch(getWeatherData(getWeather))
        debugger
    }


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
            <button onClick={(e) => dispatch(fetchWeather(e.target.value))} >add</button>
            {/* <button onSubmit={() => dispatch(fetchWeather(city))}>Submit</button> */}
            {/* {getWeather.name} {getWeather.main.temp}  */}
            {(getWeather.name ? <CurrentWeather className="main"
                city={getWeather.name}
                description={getWeather.weather[0].description}
                temperature={getWeather.main.temp}
                feels_like={getWeather.main.feels_like}
            /> : null)}
            <button onClick={()=> dispatch(getWeatherData(getWeather))}> mapping</button>
            {JSON.stringify(getWeather)}
            <Card style={{ width: '24rem' }} border='dark' className='m-2'>
            {
                textBlock.map((arr) => <CurrentWeather
                    city={arr.name}
                    description={arr.description}
                    temperature={arr.temperature}
                    feels_like={arr.feels_like}
                />)
            }
            </Card>

        </form>
    )
}

export default InputForm;