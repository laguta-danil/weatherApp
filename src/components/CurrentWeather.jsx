import { Button, Card } from 'react-bootstrap'
import { updateWeather } from '../redux/reducers/actionCreactor'
import { WeatherSlice } from '../redux/reducers/weatherReducer'
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks/reduxHooks'

const CurrentWeather = ({ description, city, temperature, feels_like, id, humidity }) => {
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
    
    
    const handleUpdate = () => {
        dispatch(updateWeather({city, id, cities: citiesData }))
    }


    return (

        <Card className='p-1'>
            <Card.Img src='https://www.1zoom.ru/big2/64/232791-Sepik.jpg' />
            <Card.Header>{city && <h2>{city}</h2>}</Card.Header>
            <Card.Body>
                {temperature && <h2>{(celsius > 0 ? '+' + celsius : celsius)} °C </h2>}
                {feels_like && <p>Feels like : {(feeling > 0 ? '+' + feeling : feeling)}</p>}
                {description && <p>Сloudy : {description}</p>}
                {humidity && <p> Humidity: {humidity}%</p>}
            </Card.Body>
            <span>
                <Button onClick={() => handleDelete()} style={{ width: '10rem' }} variant='outline-danger' className='m-1' >Delete</Button>
                <Button onClick={() => handleUpdate()} style={{ width: '10rem' }} variant="outline-success" className='m-1' >Update</Button>
            </span>
        </Card>

    )
}

export default CurrentWeather;      