import React, { useState } from 'react';

export function Weather() {
    const [weather, setWeather] = useState({});
    const [search, setSearch] = useState('Delhi');
    const api_key = "64fb2bb523bbe47a23b05e2069d06488";
    const date = new Date();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=`
    const dateBuilder = (d) => {
        const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
        return `${week[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
    }
    const getWeather = (evt) => {
        const city = evt.target.value
        if(evt.key === "Enter"){
            fetch(`${url}${city}&units=metric&appid=${api_key}`)
            .then((result) => result.json())
            .then((data) => {
                console.log('the weather data :: ',data)
                setWeather(data);
                setSearch('');
            });
        }
    }

    return (
        <div className="weather-card text-center m-3">
            <div className="search">
                {/* <button className="btn btn-primary" onClick={getJoke}>Get Joke</button> */}
                <input className="search-box"
                placeholder="Search..."
                type="text"
                value = {search}
                onChange={e => setSearch(e.target.value)}
                onKeyPress={getWeather}
                />
            </div>
            {   weather.name ?
                <>
                    <h5 className="card-header"> { weather.name ? weather.name : ''}</h5>
                    <div className="card-body">                
                        <div className="weather">
                            <div className="weather-container">
                                <div className="weather-temperature">{ Math.round(weather.main?.temp)} </div>
                                <span className="weather-measure">C</span>
                                <div className="weather-icon">
                                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon"/>
                                </div>
                            </div>
                            <div className="weather-date">{ dateBuilder(date) }</div>
                        </div>
                        <div className="weather-description">{ weather.weather ? weather.weather[0]?.description : '' }</div>
                        
                    </div>
                </>
                :
                <div className="card-header medium"> Please Select A City To search for Weather Info!</div>
            }
            
        </div>
    );
}

export default Weather;