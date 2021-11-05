
import React, { useEffect } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { fetchWeather, getWeatherLocal } from '../redux/reducers/actionCreactor'
import { WeatherSlice } from '../redux/reducers/weatherReducer'
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks/reduxHooks'
import './inputStyle.css'


const InputForm = (props) => {

    const { changer, localStoreCities } = WeatherSlice.actions
    const dispatch = useAppDispatch()
    const { text, citiesData } = useAppSelector(state => state.weatherReducer)

    const callbackText = (e) => {
        dispatch(changer(e.target.value))
    }

    useEffect(() => {
        const localData = localStorage.getItem('cities')
        const cities = localData ? JSON.parse(localData) : []
        dispatch(localStoreCities(cities))
        dispatch(getWeatherLocal(cities))
    }, [])


    const addCard = (e) => {
        e.preventDefault()
        dispatch(fetchWeather({ city: text, cities: citiesData }))
        dispatch(changer(''))

    }

    return (
        <form onSubmit={props.data}>
            <InputGroup className='mb-3'>
                <FormControl
                    aria-describedby="basic-addon2"
                    onChange={callbackText}
                    value={text}
                    type='text'
                    placeholder='Write your city'
                    name='city'
                />
                <Button variant="outline-success" id="button-addon2" onClick={addCard}>
                    Button
                </Button>
            </InputGroup>
        </form>
    )
}

export default InputForm;