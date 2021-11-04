import { CardGroup } from "react-bootstrap";
import { useAppSelector } from "../redux/reduxHooks/reduxHooks";
import CurrentWeather from "./CurrentWeather";
import InputForm from "./InputForm";
import style from "./weatherBlock.module.css"


// debugger;

const WeatherBlock = () => {

    const {citiesData } = useAppSelector(state => state.weatherReducer)

    const weatherList = citiesData.map((arr) => <CurrentWeather
        city={arr.name}
        description={arr.description}
        temperature={arr.temperature}
        feels_like={arr.feels_like}
        id={arr.id}
    />)
    
    return (
        <div>
            <div className={style.wrapp}>
                <h3 className={style.text}>WEATHER</h3>
                <div className={style.inputForm}>
                <InputForm />
                </div>
                <CardGroup border='dark' className='p-6'>
                    {weatherList}
                </CardGroup>
            </div>
        </div>
    );
}



export default WeatherBlock; 