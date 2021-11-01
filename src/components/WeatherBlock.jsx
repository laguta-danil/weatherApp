import axios from "axios";
import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import InputForm from "./InputForm";
import style from "./weatherBlock.module.css"


// debugger;

const WeatherBlock = () => {

    const [weather, setWeather] = useState([]);
    // const [city, setCity] = useState('')

    // useEffect(() => {
    //     const 

    // }, [])
    // const onChangeCity = useCallback(e => handleText(e.target.value), [])



    // useEffect(() => {
    //     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=6f84d1aedda3a1a3e9795b660ad609d9`)
    //         .then(res => {
    //             handleWeather(res.data.name)
    //         })

    // }, [handleWeather])

    // const search = evt => {
    //     if (evt.key === 'Enter') {
    //         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f84d1aedda3a1a3e9795b660ad609d9`) // отправляем запрос
    //             // .then(res => res.json())  // ответ преобразуем в json
    //             .then(result => {         // работаем с результатом
    //                 handleWeather(result);
    //                 setCity('');
    //                 console.log(result);
    //             });
    //     }
    // }

    // const format_date = (d) => {
    //     let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    //     let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    //     let day = days[d.getDay()];
    //     let date = d.getDate();
    //     let month = months[d.getMonth()];
    //     let year = d.getFullYear();

    //     return `${day} ${date} ${month} ${year}`
    // }

    // return (
    //     <form>
    //         <button onClick={handleWeather}>push</button>
    //         <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}></div>

    //         <input type='text'></input>
    //         <div className='search-box'>
    //             <input
    //                 type='text'
    //                 className='search-bar'
    //                 placeholder='Поиск...'
    //                 onChange={e => setCity(e.target.value)}
    //                 value={city}
    //                 onKeyPress={search}
    //             />
    //         </div>
    //         <div>City is: {city}</div>
    //         <div>Weather is: {weather}</div>
    //         {(typeof weather.main != 'undefined') ? (
    //     <div>
    //       <div className='location-box'>
    //         <div className='location'>{weather.name}, {weather.sys.country}</div>
    //         <div className='date'>{format_date(new Date())}</div>
    //       </div>
    //       <div className='weather-box'>
    //         <div className='temp'>
    //           {Math.round(weather.main.temp)}°c
    //         </div>
    //         <div className='weather'>{weather.weather[0].main}</div>
    //       </div>
    //     </div>
    //     ) : ('')}
    //     </form >
    // )

    async function Data(e) {
        const city = e.target.elements.city.value
        e.preventDefault()
        const apiData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f84d1aedda3a1a3e9795b660ad609d9`)
            .then(res => res.data)
        setWeather({
            data: apiData,
            city: apiData.name,
            description: apiData.weather[0].description,
            temperature: apiData.main.temp,
            feels_like: apiData.main.feels_like,
        }
        )
    }

    return (
        <div>
            <div className={style.wrapp}>
                <h3 className={style.text}>WEATHER</h3>
                <InputForm data={Data} />
            </div>
            <CurrentWeather
                city={weather.city}
                description={weather.description}
                temperature={weather.temperature}
                feels_like={weather.feels_like}
                error={weather.error}
            />
            {console.log(weather.data)}
        </div>

    );
}



export default WeatherBlock; 