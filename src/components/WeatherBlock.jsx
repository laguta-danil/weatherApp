import InputForm from "./InputForm";
import style from "./weatherBlock.module.css"


// debugger;

const WeatherBlock = () => {
    return (
        <div>
            <div className={style.wrapp}>
                <h3 className={style.text}>WEATHER</h3>
                <InputForm />
            </div>
        </div>
    );
}



export default WeatherBlock; 